import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"
import Checkbox from 'expo-checkbox';

interface IProps {
  close: boolean;
  text: string;
  id: number
  styles?: StyleProp<ViewStyle>
  onClose: (id: number, value: boolean) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = (props: IProps) => {
  const { close, onClose, text, id, onDelete, styles: _styles} = props

  return <View style={[styles.wrapper, _styles]}>

    <Checkbox value={close} onValueChange={(e) => onClose(id, e)} color="#000"/>

    <Text style={[styles.text, close ? styles.testDashed : {}]}>
      {text}
    </Text>

    <Pressable onPress={() => onDelete(id)}>
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