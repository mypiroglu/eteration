import React, {useState} from 'react';
import {View, TextInput as NativeTextInput, Pressable} from 'react-native';
import {Icon, Text} from '..';
import styles from './style';

/**
 *
 * @param {text} string text input için değer
 * @param {placeholder} string text input için placeholder
 * @param {style} object text input için style
 * @param {isSearch} boolean text input bir arama çubuğu mu onu belirtir
 * @param {rightIcon} string text input içinde sağ tarafta gösterilecek icon
 * @param {password} boolean text input password input mu onu belirtir
 * @param {errorText} string text input hata mesajı
 * @param {onChangeText} function text değişme eventi
 * @param {rightIconOnPress} function sağ taraftaki icona basılınca çalışacak event
 * @param  {...any} rest text input için diğer özellikler
 *
 * @important
 * password ile rightIcon birlikte kullanılamaz, geçerli olan password özelliğidir.
 *
 * @example
 *
 * const [text, setText] = useState('');
 * const [error, setError] = useState(false);
 *
 * <TextInput
 * text={"text"}
 * placeholder={"placeholder"}
 * style={{}}
 * isSearch // default false
 * rightIcon={"iconName"}
 * password // default false
 * errorText={error ? 'errorText' : ''}
 * onChangeText={text => console.log(text)}
 * rightIconOnPress={() => console.log("rightIconOnPress")}
 * />
 *
 * @returns
 */

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
