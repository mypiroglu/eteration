import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Product Detail Screen"
        onPress={() => navigation.navigate('product-detail-screen')}
      />
    </View>
  );
};
