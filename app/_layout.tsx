import { TabBar } from '@/components/shared/TabBar/TabBar';
import { Slot } from 'expo-router';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default function MainLayout() {
  return <NativeBaseProvider>
      <Box style={styles.wrapper}>
        <Slot />
        <TabBar />
      </Box>
    </NativeBaseProvider>;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 160,
    flex: 1,
  }
})