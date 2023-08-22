import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  Button,
  Header,
  TextInput,
  Icon,
  ProductCard,
} from '../../components';
export const TestScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title="Test Screen" />
      <ProductCard
        img={
          'https://loremflickr.com/cache/resized/65535_52668639841_bc2b0b674d_c_640_480_nofilter.jpg'
        }
        price={'14000'}
        title={
          'Labore sit adipisicing laborum consequat elit. Magna cillum consequat minim esse amet exercitation consequat laborum qui pariatur aliqua est ipsum. Mollit commodo ex non Lorem officia adipisicing do ea dolor aliqua.'
        }
      />
    </View>
  );
};
