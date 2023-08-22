import React, {useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import styles from './style';
import {Header, ProductCard, Icon} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../api';
import colors from '../../utils/colors';

export const BasketScreen = () => {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector(state => state.products);
  useEffect(() => {
    dispatch(getData());
  }, []);
  useEffect(() => {
    console.log('-------');
    console.log(data);
    console.log('-------');
  }, [data]);
  const RenderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <ProductCard item={item} />
      </View>
    );
  };
  return isLoading ? (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  ) : (
    <View style={styles.container}>
      <Header title="Basket Screen" />
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
