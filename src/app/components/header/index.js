import React from 'react';
import {Pressable, View} from 'react-native';
import {Icon, Text} from '..';
import styles from './style';

const HeaderIcon = ({icon, style, onPress}) => (
  <Pressable style={style} onPress={onPress}>
    <Icon icon={icon} />
  </Pressable>
);

export const Header = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  style,
}) => {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.titleText}>{title}</Text>
      {leftIcon && (
        <HeaderIcon
          icon={leftIcon}
          style={styles.leftButton}
          onPress={onLeftPress}
        />
      )}
      {rightIcon && (
        <HeaderIcon
          icon={rightIcon}
          style={styles.rightButton}
          onPress={onRightPress}
        />
      )}
    </View>
  );
};
