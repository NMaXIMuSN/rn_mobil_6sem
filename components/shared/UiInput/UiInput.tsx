import { heightField } from '@/constants/Style';
import { useState } from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';

interface IProps {
  value: string
  setValue: (v: string) => void
  styles?: StyleProp<ViewStyle>
}

export const UiInput = (props: IProps) =>  {
  const { value, setValue, styles: _styles } = props

  return (
    <View style={[styles.wrapper, _styles]}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        style={[styles.input]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
  },
  wrapper: {
    height: heightField,
  }
});
