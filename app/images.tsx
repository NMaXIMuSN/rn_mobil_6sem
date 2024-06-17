import { AddImage } from '@/components/feature/AddImage/AddImage';
import { ImagesList } from '@/components/widgets/ImagesList/ImagesList';
import { ImagesProvider } from '@/context/ImgaesContext';

import { StyleSheet, Text, View } from 'react-native';

export default function UserScreen() {

  return (
    <ImagesProvider>
      <View>
        <View>
          <AddImage />
          <ImagesList />
        </View>
      </View>
    </ImagesProvider>
  );
}