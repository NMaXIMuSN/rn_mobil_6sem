import { heightField } from '../../../constants/Style';
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface IProps {
  onPress?: () => void;
  title?: string;
  idLoading?: boolean
}

export const UiButton = (props: IProps) => {
  const { onPress, title = 'Save', idLoading } = props;
  return (
    <Pressable style={styles.button} disabled={idLoading} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: heightField,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});