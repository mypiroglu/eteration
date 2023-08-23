import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
export const RadioButton = ({item, setState, style, state}) => {
  const onHandlePress = () => {
    setState(item.id);
  };
  return (
    <TouchableOpacity style={[styles.root, style]} onPress={onHandlePress}>
      {state && <View style={styles.inside} />}
    </TouchableOpacity>
  );
};
