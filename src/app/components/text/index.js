import React from 'react';
import {Text as RnText} from 'react-native';
import styles from './style';

export const Text = ({children, style, onPress, ...rest}) => (
  <RnText
    onPress={onPress}
    style={onPress ? styles.buttonText : [styles.text, style]}
    allowFontScaling={false}
    {...rest}>
    {children}
  </RnText>
);
