import { TabBar } from '@/components/shared/TabBar/TabBar';
import { Slot, Link } from 'expo-router';
import { Box, NativeBaseProvider, Text, View } from 'native-base';
import { StyleSheet, Platform } from 'react-native';

export default function MainLayout() {
  return <NativeBaseProvider>
      <Box style={styles.wrapper}>
        { Platform.OS === 'web' && 
          <Box style={styles.header}>
              <Link href='/'>
                Задания
              </Link>
              <Link href='/images'>
                Изображения
              </Link>
          </Box>
        }
        <Slot />
        {Platform.OS !== 'web' && <TabBar />}
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
    ...Platform.select({
      web: {
        width: '100%',
        maxWidth: 800,
        paddingTop: 0,
        marginHorizontal: 'auto',
        overflow: 'scroll',
      },
    })
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 20,
  }
})