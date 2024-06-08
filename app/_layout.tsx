import { TabBar } from '@/components/shared/TabBar/TabBar';
import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function MainLayout() {
  return <View style={styles.wrapper}>
    <Slot />
    <TabBar />
    </View>;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 80,
    flex: 1,
  }
})