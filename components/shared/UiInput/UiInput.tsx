import { heightField } from '@/constants/Style';
import { useState } from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle, TextInputProps } from 'react-native';

export interface IInputProps extends TextInputProps {
  value: string
  setValue: (v: string) => void
  styles?: StyleProp<ViewStyle>
}

export const UiInput = (props: IInputProps) =>  {
  const { value, setValue, styles: _styles, ...otherProps } = props

  return (
    <View style={[styles.wrapper, _styles]}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        style={[styles.input]}
        {...otherProps}
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
