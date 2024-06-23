import { borderRadius } from "@/components/shared/styles/borderRadius"
import { IImage, ImagesContext } from "@/context/ImgaesContext"
import { axiosInstance } from "@/utils/axios"
import { useContext, useEffect } from "react"
import { Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native"

export const ImagesList = () => {
  const { images, setImages } = useContext(ImagesContext)

  useEffect(() => {
    const fetch = async () => {
      try {
        const {data} = await axiosInstance<IImage[]>({
          method: 'GET',
          url: 'img',
        })

        setImages(data)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetch()
  }, [])
  return (
    <ScrollView style={styles.wrapper}>
      { images.map((image) => (
        <Image
          key={image.id}
          style={styles.image}
          resizeMode='cover'
          source={{
            uri: image.uri,
          }}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    gap: 8,
    marginTop: 8,
  },
  wrapperList: {
    flex: .5,
  },
  image: {
    marginBottom: 8,
    width: "100%",
    height: 250,
    ...borderRadius,
    ...Platform.select({
      web: {
        height: 500,
      }
    })
  },
})