import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import { Checkbox, Icon, IconButton } from 'native-base';
import { ITodoItem } from "@/context/TodoContext";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { borderRadius } from "@/components/shared/styles/borderRadius";

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

  return <View style={[styles.wrapper, _styles]} >

    <Checkbox value={'false'} isChecked={close} onChange={() => handlerClose()} isDisabled={isLoading} />

    <Text style={[styles.text, close ? styles.testDashed : {}]}>
      {text}
    </Text>

    <Pressable onPress={() => handlerDelete()} disabled={isLoading}>
      <IconButton icon={<FontAwesome name="trash-o" size={24} color="red" /> } />
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    padding: 4,
    borderColor: 'rgba(212,212,212,1.00)',
    borderWidth: 1,
    alignItems: 'center',
    ...borderRadius,
  },
  text: {
    flex: 1,
  },
  testDashed: {
    textDecorationLine: 'line-through'
  }
})