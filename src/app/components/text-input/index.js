import React, {useState} from 'react';
import {View, TextInput as NativeTextInput, Pressable} from 'react-native';
import {Icon, Text} from '..';
import styles from './style';

export const TextInput = ({
  text,
  placeholder,
  style,
  isSearch = false,
  rightIcon,
  password = false,
  errorText,
  onChangeText,
  rightIconOnPress,
  ...rest
}) => {
  const [secureText, setSecureText] = useState(true);

  const options = {
    style: styles.root,
    placeholder: placeholder,
    value: text,
    errorText: errorText,
    onChangeText: onChangeText,
  };

  return (
    <View style={styles.container}>
      {isSearch ? (
        <View style={styles.container}>
          <NativeTextInput
            {...options}
            {...styles.searchBar}
            {...style}
            {...rest}
          />
          <View style={styles.leftIcon}>
            <Icon icon={'Search'} />
          </View>
        </View>
      ) : (
        <View>
          <View>
            <NativeTextInput
              {...options}
              {...style}
              {...rest}
              secureTextEntry={password ? secureText : false}
            />
            {password && (
              <View style={styles.button}>
                <Pressable onPress={() => setSecureText(!secureText)}>
                  <Icon icon={secureText ? 'Eye' : 'EyeOff'} />
                </Pressable>
              </View>
            )}

            {rightIcon && !password && (
              <Pressable style={styles.rightIcon} onPress={rightIconOnPress}>
                <Icon icon={rightIcon} />
              </Pressable>
            )}
          </View>
          {errorText && (
            <View style={styles.errorContainer}>
              <Text style={styles.unicode}>&#10071;</Text>
              <Text style={styles.errortext}>{errorText}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
