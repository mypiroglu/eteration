import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '..';
import styles from './style';
export const Button = ({title, onPress, style, disabled = false}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
