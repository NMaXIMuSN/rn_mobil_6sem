import { useState } from "react"
import { Box, Button, IconButton, Input } from "native-base"
import { Pressable, StyleSheet } from "react-native"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { borderRadius } from "../styles/borderRadius"

interface IProps {
  idLoading?: boolean
  onChangeText?: (value: string) => void
  placeholder?: string
}

export const InputWithButton = (props: IProps) => {
  const { onChangeText, idLoading, placeholder } = props
  const [v, setV] = useState('')

  const onPress = () => {
    onChangeText?.(v)
    setV('')
  }

  return <Box alignItems="center">
    <Input _web={styles.inputWrapper} _android={styles.inputWrapper} type="text" w="100%" value={v} onChangeText={setV} py="0" InputRightElement={<>
      {v && <IconButton onPress={() => {setV('')}} icon={<AntDesign name="close" size={16} color="black" /> } /> }
      <Button size="xs" rounded="none" w="1/4" maxW={100} h="full" onPress={onPress}>Отправить</Button>
      </>} placeholder={placeholder} />
  </Box>
}

const styles = StyleSheet.create({
  inputWrapper: {
    ...borderRadius
  }
})