import { InputWithButton } from "@/components/shared/InputWithButton/InputWithButton"
import { useContext, useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { TodoItem } from "./TodoItem"
import { TodoContext, ITodoItem  } from "@/context/TodoContext"
import { axiosInstance } from "@/utils/axios"

export const Todo = () => {
  const {setTodo, todo} = useContext(TodoContext)
  const [idLoading, setIdLoading] = useState(false)
  
  // Создает эффект который отрабатывает при изменении зависимостей. в нашем случае отрабатывает при рендре компонента
  useEffect(() => {
    axiosInstance<ITodoItem[]>({
      url: '/todo',
      method: 'GET',
    }).then(( {data} ) => {
      setTodo(data.reverse());
    })
  }, [])

  // функция для изменения состояния выполнения задачи
  const setCloseItem = async (item: ITodoItem) => {
    await axiosInstance<ITodoItem>({
      method: "PUT",
      url: `todo/${item.id}`,
      data: {
        ...item,
        close: !item.close,
      },
    }).then((res) => {
      setTodo((prev) => {
        return prev.map((_item) => {
            if (_item.id === item.id) {
              return res.data;
            }

            return _item;
          })
      })
    })

  }
  // функция для добавления
  const addNewItem = async (text: string) => {
    if (!text) {
      return
    }
    setIdLoading(true)
    await axiosInstance<ITodoItem>({
      method: "POST",
      url: '/todo/',
      data: {
        id: todo[0].id,
        text,
        createdAt: new Date(Date.now()).toISOString(),
        close: false,
      }
    }).then((res) => {
      setTodo((prev) => [res.data, ...prev])
    })

    setIdLoading(false)
  }

  // функция для удаления
  const deleteListItem = async (item: ITodoItem) => {
    await axiosInstance(`todo/${item.id}`, {
      method: "DELETE",
    }).then((res) => {
      setTodo((prev) => prev.filter(_item => _item.id !== item.id))
    })
  }

  return <View style={styles.wrapper}>
    <InputWithButton idLoading={idLoading} onChangeText={addNewItem} />
    <ScrollView style={styles.scrollWrapper}>
      {todo && todo.map(item =>(
        <TodoItem
          key={item.id}
          close={item.close}
          id={item.id}
          text={item.text}
          onClose={setCloseItem}
          onDelete={deleteListItem}
          styles={styles.item}
          item={item}
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
    height: 200,
  },
  item: {
    marginBottom: 10,
  }
})
