import { Todo } from '@/components/feature/Todo';
import { TodoContextProvider } from '@/context/TodoContext';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  
  return (
    <TodoContextProvider>
      <View style={styles.wrapper}>
        <Todo />
      </View>
    </TodoContextProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
  }
})
