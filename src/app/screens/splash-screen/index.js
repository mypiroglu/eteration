import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {Text} from '../../components';
import style from './style';

export const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('bottom-tab');
  }, 2000);

  return (
    <SafeAreaView style={style.root}>
      <View style={style.container}>
        <Image
          resizeMode="contain"
          style={style.splashLogo}
          source={require('../../../assets/images/splash.png')}
        />
        <Text style={style.splashText}>Welcome to ETERATION </Text>
      </View>
    </SafeAreaView>
  );
};
