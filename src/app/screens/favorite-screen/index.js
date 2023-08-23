import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import {Header, InfoProductCard} from '../../components';
import {useSelector} from 'react-redux';

export const FavoriteScreen = () => {
  const {favorites} = useSelector(state => state.favorites);

  const RenderItem = item => {
    return <InfoProductCard data={item} preset="secondary" />;
  };
  useEffect(() => {
    console.log('favorites', favorites);
  }, [favorites]);
  return (
    <View style={styles.container}>
      <Header title="Favorite Screen" />
      <View style={styles.productsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={favorites}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};
