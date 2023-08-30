import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import {Header, InfoProductCard, BottomCard, Text} from '../../components';
import {useSelector} from 'react-redux';

export const BasketScreen = () => {
  const {basket} = useSelector(state => state.basket);

  const calculatedPrice = basket.reduce((acc, item) => {
    return acc + item.item.price * item.quantity;
  }, 0);

  const RenderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <InfoProductCard data={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Basket Screen" />
      {basket.length > 0 ? (
        <>
          <View style={styles.productsContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={basket}
              renderItem={RenderItem}
              keyExtractor={(item, index) => index}
            />
          </View>
          <BottomCard price={calculatedPrice} title={'Complete'} />
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Products in Basket 🛒 </Text>
        </View>
      )}
    </View>
  );
};
