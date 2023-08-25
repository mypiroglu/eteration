import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ProductDetailScreen, SplashScreen} from '../screens';
import MyTabs from './bottom-tab';
import colors from '../utils/colors';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {addToBasketInitial} from '../redux/slice/basket-slice';
import {addToFavoritesInitial} from '../redux/slice/favorites-slice';
import {useDispatch} from 'react-redux';

const AppStack = () => {
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
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'splash-screen'}
        screenOptions={{
          transitionSpec: {
            open: config,
            close: config,
          },
          gestureEnabled: false,
          headerShown: false,
          contentStyle: {backgroundColor: colors.white},
        }}>
        {isSplash && (
          <Stack.Screen name="splash-screen" component={SplashScreen} />
        )}
        <Stack.Screen name="bottom-tab" component={MyTabs} />
        <Stack.Screen
          name="product-detail-screen"
          component={ProductDetailScreen}
        />
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
