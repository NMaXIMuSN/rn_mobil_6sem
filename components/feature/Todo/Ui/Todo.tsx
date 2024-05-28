import { InputWithButton } from "@/components/shared/InputWithButton/InputWithButton"
import { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { TodoItem } from "./TodoItem"

export interface TodoItem {
  close: boolean
  id: number
  text: string
}

export const Todo = () => {
  const [list, setList] = useState<TodoItem[]>([])

  // функция для изменения состояния выполнения задачи
  const setCloseItem = (id: number, value: boolean) => {
    setList((prev) => {
      const item = prev.find((item) => item.id === id)

      if (item) {
        item.close = value
      }

      return [...prev]
    })
  }
  // функция для добавления
  const addNewItem = (text: string) => {
    setList((prev) => [...prev, {
      close: false,
      id: Date.now(),
      text,
    }])
  }

  // функция для удаления
  const deleteListItem = (id: number) => {
    setList((prev) => prev.filter((item) => item.id !== id))
  }

  return <View style={styles.wrapper}>
    <InputWithButton onChangeText={addNewItem} />
    <ScrollView style={styles.scrollWrapper}>
      {list.map(item =>(
        <TodoItem
          key={item.id}
          close={item.close}
          id={item.id}
          text={item.text}
          onClose={setCloseItem}
          onDelete={deleteListItem}
          styles={styles.item}
        />
      ))}
    </ScrollView>
  </View>
}


const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
  },
  scrollWrapper: {
    display: 'flex',
    gap: 10,
  },
  item: {
    marginBottom: 10,
  }
})
