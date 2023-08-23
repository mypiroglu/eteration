import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../screens';
import {CardStyleInterpolators} from '@react-navigation/stack';

import colors from '../utils/colors';
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <SafeAreaView style={style.root}>
      <Stack.Navigator
        initialRouteName="profile-screen"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>
        <Stack.Screen name="profile-screen" component={ProfileScreen} />
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
export default ProfileStack;
