import React from 'react';
import {Text as RnText} from 'react-native';
import styles from './style';

export const Text = ({children, ...rest}) => (
  <RnText
    testID="text"
    style={styles.buttonText}
    allowFontScaling={false}
    {...rest}>
    {children}
  </RnText>
);
