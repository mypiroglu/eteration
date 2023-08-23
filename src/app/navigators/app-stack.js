import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ProductDetailScreen} from '../screens';
import MyTabs from './bottom-tab';
import colors from '../utils/colors';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {addToBasketInitial} from '../redux/slice/basket-slice';
import {addToFavoritesInitial} from '../redux/slice/favorites-slice';
import {useDispatch} from 'react-redux';
const AppStack = () => {
  const [onBoard, setOnBoard] = useState(false);
  const dispatch = useDispatch();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  isFirstLoad &&
    (AsyncStorage.getItem('basket')
      .then(res => {
        if (res) {
          setIsFirstLoad(false);
          const parsedData = JSON.parse(res);
          parsedData.map(data => {
            dispatch(
              addToBasketInitial({
                quantity: data.quantity,
                item: data.item,
              }),
            );
          });
        } else {
          console.log('Veri bulunamadı.');
        }
      })
      .catch(error => {
        console.error('Veri getirilirken bir hata oluştu:', error);
      }),
    AsyncStorage.getItem('favorites')
      .then(res => {
        if (res) {
          setIsFirstLoad(false);
          const parsedData = JSON.parse(res);
          parsedData.map(data => {
            console.log('data', typeof data);
            dispatch(addToFavoritesInitial(data));
          });
        } else {
          console.log('Veri bulunamadı.');
        }
      })
      .catch(error => {
        console.error('Veri getirilirken bir hata oluştu:', error);
      }));

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
