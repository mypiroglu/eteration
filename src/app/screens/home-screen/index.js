import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import styles from './style';
import {Header, ProductCard} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../api';
import colors from '../../utils/colors';
import AsyncStorage from '@react-native-community/async-storage';
import {addToBasketInitial} from '../../redux/slice/basket-slice';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.products);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const RenderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <ProductCard item={item} />
      </View>
    );
  };

  useEffect(() => {
    dispatch(getData());
  }, []);
  return isLoading ? (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  ) : (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <View style={styles.productsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};
