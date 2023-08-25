import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
export const RadioButton = ({item, setState, style, state, filter = false}) => {
  const onHandlePress = () => {
    setState(item.id);
  };
  return (
    <TouchableOpacity
      testID="radio-button"
      style={[styles.root, style]}
      onPress={onHandlePress}
      disabled={filter}>
      {state && <View style={styles.inside} />}
    </TouchableOpacity>
  );
};
