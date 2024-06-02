import { Todo } from '@/components/feature/Todo';
import { InputWithButton } from '@/components/shared/InputWithButton/InputWithButton';
import { UiButton } from '@/components/shared/UiButton/UiButton';
import { UiInput } from '@/components/shared/UiInput/UiInput';
import { TodoContextProvider } from '@/context/TodoContext';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [ value, setValue ] = useState('')
  return (
    <TodoContextProvider>
      <View style={styles.wrapper}>
        <Text>
          TodoList
        </Text>
        <Todo />
      </View>
    </TodoContextProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 20,
  }
})
