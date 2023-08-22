import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '..';
import styles from './style';
export const Button = ({
  title,
  onPress,
  style,
  disabled = false,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? [styles.button, style, {backgroundColor: '#000'}]
          : [styles.button, style]
      }
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
