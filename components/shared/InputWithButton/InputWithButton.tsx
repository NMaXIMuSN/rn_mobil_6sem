import { StyleSheet, View } from "react-native"
import { IInputProps, UiInput } from "../UiInput/UiInput"
import { UiButton } from "../UiButton/UiButton"
import { useState } from "react"

interface IProps {
  idLoading?: boolean
  onChangeText?: (value: string) => void
  inputProps?: IInputProps
}

export const InputWithButton = (props: IProps) => {
  const { onChangeText, idLoading, inputProps } = props
  const [v, setV] = useState('')

  const onPress = () => {
    onChangeText?.(v)
    setV('')
  }

  return <View style={[styles.wrapper]}>
    <UiInput styles={styles.input} value={v} setValue={setV} {...inputProps}/>
    <UiButton idLoading={idLoading} onPress={onPress}/>
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