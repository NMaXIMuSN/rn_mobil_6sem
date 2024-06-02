import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import Checkbox from 'expo-checkbox';
import { ITodoItem } from "@/context/TodoContext";
import { useLoading } from "@/hooks/useLoading";
import { useState } from "react";

interface IProps {
  close: boolean;
  text: string;
  id: number
  item: ITodoItem
  styles?: StyleProp<ViewStyle>
  onClose: (ITodoItem: ITodoItem) => Promise<void> | void;
  onDelete: (ITodoItem: ITodoItem) => Promise<void> | void;
}

export const TodoItem = (props: IProps) => {
  const { close, onClose, text, id, onDelete, styles: _styles, item} = props
  const  [isLoading, setIsLoading] = useState(false)
  
  const handlerClose = async() => {
    setIsLoading(true)
    await onClose(item)
    setIsLoading(false)

  }

  const handlerDelete = async() => {
    setIsLoading(true)
    await onDelete(item)
    setIsLoading(false)
  }

  return <View style={[styles.wrapper, _styles]}>

    <Checkbox value={close} onValueChange={(e) => handlerClose()} color="#000" disabled={isLoading}/>

    <Text style={[styles.text, close ? styles.testDashed : {}]}>
      {text}
    </Text>

    <Pressable onPress={() => handlerDelete()} disabled={isLoading}>
      <Text >
        Удалить
      </Text>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    flex: 1,
  },
  testDashed: {
    textDecorationLine: 'line-through'
  }
})