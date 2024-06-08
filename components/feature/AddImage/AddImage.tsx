import { InputWithButton } from "@/components/shared/InputWithButton/InputWithButton"
import { IImage, ImagesContext } from "@/context/ImgaesContext"
import { axiosInstance } from "@/utils/axios"
import { useContext } from "react"
import { View } from "react-native"

export const AddImage = () => {
  const { setImages } = useContext(ImagesContext)
  const addImageHandler = async (e: string) => {
    try {
      const { data } = await axiosInstance<IImage>({
        method: 'POST',
        url:'/img',
        data: {
          uri: e
        }
      })

      setImages((prev) => [...prev, data])
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <InputWithButton onChangeText={addImageHandler} />
    </View>
  )
}