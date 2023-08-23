import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import {CardStyleInterpolators} from '@react-navigation/stack';

import colors from '../utils/colors';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <SafeAreaView style={style.root}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="home-screen" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
});
export default HomeStack;
