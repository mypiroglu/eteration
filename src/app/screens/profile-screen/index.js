import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import {Text, Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.image}
        source={{
          uri: 'https://iasbh.tmgrup.com.tr/01b781/0/0/0/0/1440/720?u=https://isbh.tmgrup.com.tr/sbh/2020/12/20/son-dakika-saglikci-ve-yakinina-buyuk-destek-saglik-calisani-ve-yakinlarina-ne-kadar-odeme-yapilacak-1608446191339.jpg&mw=700',
        }}
      />
    </ScrollView>
  );
};
