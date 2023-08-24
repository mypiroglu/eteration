import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import {Header, InfoProductCard, Text} from '../../components';
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
      {favorites.length > 0 ? (
        <View style={styles.productsContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favorites}
            renderItem={RenderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Favorites 🤩</Text>
        </View>
      )}
    </View>
  );
};
