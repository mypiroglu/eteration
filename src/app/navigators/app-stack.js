import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {TestScreen, ProductDetailScreen} from '../screens';
import MyTabs from './bottom-tab';
// import AsyncStorage from '@react-native-community/async-storage';
import colors from '../utils/colors';
import {SafeAreaView, StyleSheet} from 'react-native';

const AppStack = () => {
  const [onBoard, setOnBoard] = useState(false);

  // const GetData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@first');
  //     if (value !== null) {
  //       setOnBoard(value);
  //       console.log('value', value);
  //     }
  //   } catch (e) {
  //     // Veri okuma hatası
  //   }
  // };
  // useEffect(() => {
  //   GetData();
  // }, []);
  const [isSplash, setIsSplash] = useState(true);
  const Stack = createStackNavigator();

  setTimeout(() => {
    setIsSplash(false);
  }, 2000);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          headerShown: false,
          contentStyle: {backgroundColor: colors.white},
        }}>
        <Stack.Screen name="bottom-tab" component={MyTabs} />
        <Stack.Screen
          name="product-detail-screen"
          component={ProductDetailScreen}
        />
        {/* {isSplash && <Stack.Screen name="test-screen" component={TestScreen} />} */}
        {/* {!onBoard && <Stack.Screen name="test-screen" component={TestScreen} />} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default AppStack;
