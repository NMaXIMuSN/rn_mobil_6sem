import { StyleSheet, View } from "react-native"
import { UiInput } from "../UiInput/UiInput"
import { UiButton } from "../UiButton/UiButton"
import { useState } from "react"

interface IProps {
  onChangeText?: (value: string) => void
}

export const InputWithButton = (props: IProps) => {
  const { onChangeText } = props
  const [v, setV] = useState('')

  const onPress = () => {
    onChangeText?.(v)
    setV('')
  }

  return <View style={[styles.wrapper]}>
    <UiInput styles={styles.input} value={v} setValue={setV}/>
    <UiButton onPress={onPress}/>
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  }
})