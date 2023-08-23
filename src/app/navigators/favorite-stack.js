import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavoriteScreen} from '../screens';
import {CardStyleInterpolators} from '@react-navigation/stack';

import colors from '../utils/colors';
const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <SafeAreaView style={style.root}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="favorite-screen" component={FavoriteScreen} />
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
export default FavoriteStack;
