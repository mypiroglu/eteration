import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './home-stack';
import ProfileStack from './profile-stack';
import BasketStack from './basket-stack';
import FavoriteStack from './favorite-stack';
import colors from '../utils/colors';
import Svg, {Path, Polygon} from 'react-native-svg';
import sizing from '../theme/sizing';

const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home-stack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarStyle: style.tabBar,
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="home-stack"
        component={HomeStack}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  style.iconContainer,
                  {borderTopWidth: focused ? 3 : 0},
                ]}>
                <HomeIcon color={focused ? colors.yellow : colors.white} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="basket-stack"
        component={BasketStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  style.iconContainer,
                  {borderTopWidth: focused ? 3 : 0},
                ]}>
                <BasketIcon color={focused ? colors.yellow : colors.white} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="favorite-stack"
        component={FavoriteStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  style.iconContainer,
                  {borderTopWidth: focused ? 3 : 0},
                ]}>
                <FavoriteIcon color={focused ? colors.yellow : colors.white} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="profile-stack"
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  style.iconContainer,
                  {borderTopWidth: focused ? 3 : 0},
                ]}>
                <ProfileIcon color={focused ? colors.yellow : colors.white} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
function HomeIcon({color, ...rest}) {
  return (
    <Svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M29.848 9.927L18 0.835C17.2777 0.293004 16.399 0 15.496 0C14.593 0 13.7143 0.293004 12.992 0.835L1.153 9.925C0.951438 10.0754 0.787549 10.2706 0.674235 10.4952C0.560922 10.7197 0.501279 10.9675 0.5 11.219V28.326C0.513868 28.7814 0.707158 29.2129 1.03776 29.5265C1.36835 29.84 1.80947 30.0102 2.265 30H10.206C10.6617 30.0102 11.103 29.8399 11.4336 29.5261C11.7642 29.2124 11.9574 28.7806 11.971 28.325V17.5H19.029V28.326C19.0429 28.7814 19.2362 29.2129 19.5668 29.5265C19.8974 29.84 20.3385 30.0102 20.794 30H28.735C29.1905 30.0102 29.6316 29.84 29.9622 29.5265C30.2928 29.2129 30.4861 28.7814 30.5 28.326V11.219C30.4982 10.968 30.4385 10.7207 30.3254 10.4966C30.2123 10.2725 30.0489 10.0776 29.848 9.927Z"
        fill={color}
      />
    </Svg>
  );
}
function BasketIcon({color, ...rest}) {
  return (
    <Svg
      fill={color}
      id="Capa_1"
      enable-background="new 0 0 475.293 475.293"
      height="32"
      viewBox="0 0 475.293 475.293"
      width="32"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="m475.293 178.235h-80.708l-84.791-141.32c-4.206-7.02-13.33-9.312-20.379-5.091-7.035 4.221-9.312 13.344-5.091 20.379l75.619 126.032h-244.592l75.619-126.033c4.221-7.035 1.944-16.158-5.091-20.379-7.064-4.221-16.158-1.929-20.379 5.091l-84.791 141.32h-80.709v29.706h32.237l37.734 201.283c3.945 21.076 22.366 36.364 43.805 36.364h247.742c21.438 0 39.859-15.288 43.79-36.349l37.747-201.298h32.239c-.001 0-.001-29.705-.001-29.705zm-99.184 225.535c-1.305 7.02-7.441 12.112-14.592 12.112h-247.741c-7.151 0-13.286-5.091-14.606-12.126l-36.719-195.816h350.392s-36.734 195.83-36.734 195.83z" />
    </Svg>
  );
}
function FavoriteIcon({color, ...rest}) {
  return (
    <Svg
      fill={color}
      height="32"
      width="32"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53.867 53.867">
      <Polygon
        style="fill:#EFCE4A;"
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
   10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      />
    </Svg>
  );
}

function ProfileIcon({color, ...rest}) {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 30 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M28.9321 31.0001V27.6671C28.921 25.888 28.2037 24.186 26.9378 22.9358C25.672 21.6855 23.9613 20.9892 22.1821 21.0001H8.68213C6.90295 20.9892 5.19231 21.6855 3.92646 22.9358C2.66061 24.186 1.94323 25.888 1.93213 27.6671V31.0001"
        stroke={color}
        stroke-width="0"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.4321 14.334C19.1601 14.334 22.1821 11.3491 22.1821 7.667C22.1821 3.98492 19.1601 1 15.4321 1C11.7042 1 8.68213 3.98492 8.68213 7.667C8.68213 11.3491 11.7042 14.334 15.4321 14.334Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
const style = StyleSheet.create({
  iconContainer: {
    borderColor: colors.yellow,
    height: sizing.componentHeight * 2,
    position: 'absolute',
    top: 5,
    paddingTop: Platform.OS === 'ios' ? 20 : 15,
  },
  tabBar: {
    backgroundColor: colors.blue,
    height: Platform.OS === 'ios' ? 100 : 70,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: sizing.radius * 1.8,
    borderTopRightRadius: sizing.radius * 1.8,
  },
});
export default MyTabs;
