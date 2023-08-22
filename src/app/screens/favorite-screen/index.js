import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import {Text, Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
export const FavoriteScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <Text>Fovorite</Text>
    </ScrollView>
  );
};
