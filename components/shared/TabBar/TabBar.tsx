import { StyleSheet, Text, View } from "react-native"
import { Link, usePathname } from "expo-router"
import { Entypo, Feather } from '@expo/vector-icons'

export const TabBar = () => {
  const path = usePathname()
  console.log(path);
  
  return (
    <View style={styles.tabBar}>
      <Link href={'/'}>
      <View style={styles.tabItem}>
        <Entypo name="list" size={24} color={path === '/' ? 'blue': 'black'} />
      </View>
      </Link>
      <Link href={'/images'}>
      <View style={styles.tabItem}>
          <Feather style={styles.tabItemIcon} name="image" size={24} color={path === '/images' ? 'blue': 'black'} />
      </View>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  tabItem: {
    justifyContent: 'center',
  },
  tabItemIcon: {
    justifyContent: 'center',
  }
})