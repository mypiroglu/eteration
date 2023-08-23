import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppStack from './navigators/app-stack';
import colors from './utils/colors';

const App = () => {
  return (
    <View style={style.root}>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default App;
