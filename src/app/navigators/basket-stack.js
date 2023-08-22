import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BasketScreen} from '../screens';
import {CardStyleInterpolators} from '@react-navigation/stack'; // Import the required interpolator

import colors from '../utils/colors';
const Stack = createNativeStackNavigator();

const BasketStack = () => {
  return (
    <SafeAreaView style={style.root}>
      <Stack.Navigator
        initialRouteName="basket-screen"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="basket-screen" component={BasketScreen} />
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
export default BasketStack;
