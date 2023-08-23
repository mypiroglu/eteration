import React, {useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import styles from './style';
import {
  Header,
  ProductCard,
  InfoProductCard,
  BottomCard,
} from '../../components';
import {useSelector} from 'react-redux';

export const BasketScreen = () => {
  const {basket} = useSelector(state => state.basket);
  const data = [
    {
      id: 1,
      brand: 'Apple',
      price: 10000,
      description: 'Iphone 12 Pro Max',
      image:
        'https://www.technopat.net/sosyal/eklenti/iphone-12-pro-max-ozellikleri-ve-fiyati.138785/',
    },
    {
      id: 2,
      brand: 'Samsung',
      price: 8000,
      description: 'Samsung Galaxy S21 Ultra',
      image:
        'https://www.technopat.net/sosyal/eklenti/samsung-galaxy-s21-ultra-ozellikleri-ve-fiyati.138786/',
    },
  ];
  const RenderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <InfoProductCard data={item} />
      </View>
    );
  };
  useEffect(() => {
    console.log('basketttt', basket);
  }, [basket]);
  return (
    <View style={styles.container}>
      <Header title="Basket Screen" />
      <View style={styles.productsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={basket}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
      <BottomCard price={data[0].price + data[1].price} title={'Complete'} />
    </View>
  );
};
