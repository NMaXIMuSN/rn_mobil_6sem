import { useState } from "react"
import { Box, Button, IconButton, Input } from "native-base"
import { Pressable } from "react-native"
import { AntDesign, FontAwesome } from "@expo/vector-icons"

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
    <Input type="text" w="100%" value={v} onChangeText={setV} py="0" InputRightElement={<>
      {v && <IconButton onPress={() => {setV('')}} icon={<AntDesign name="close" size={16} color="black" /> } /> }
      <Button size="xs" rounded="none" w="1/4" h="full" onPress={onPress}>Отправить</Button>
      </>} placeholder={placeholder} />
  </Box>
}