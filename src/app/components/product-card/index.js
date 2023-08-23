import React, {useState, useEffect} from 'react';
import {View, Image, Pressable} from 'react-native';
import {Text, Button, Icon} from '..';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/slice/favorites-slice';
import {addToBasket, removeFromBasket} from '../../redux/slice/basket-slice';
import {useDispatch, useSelector} from 'react-redux';

export const ProductCard = ({item}) => {
  const dispatch = useDispatch();
  const {price, brand, image, description} = item;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const {favorites} = useSelector(state => state.favorites);
  const onHandlePress = () => {
    navigation.navigate('product-detail-screen', {item: item});
  };

  const onHandlePressIcon = () => {
    isFavorite
      ? dispatch(removeFromFavorites(item))
      : dispatch(addToFavorites(item));
    setIsFavorite(!isFavorite);
  };
  const onHandlePressButton = () => {
    console.log('button');
    const quantity = 1;
    dispatch(addToBasket({item: item, quantity}));
  };
  useEffect(() => {
    const favoriteState = favorites.find(favorite => favorite.id === item.id);
    if (favoriteState) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [item]);
  return (
    <Pressable style={styles.root} onPress={onHandlePress}>
      <>
        <View style={styles.image}>
          <Pressable style={styles.icon} onPress={onHandlePressIcon}>
            <Icon
              icon={isFavorite ? 'Star' : 'UnStar'}
              width="30"
              height="30"
              style={styles.icon}
            />
          </Pressable>
          <Image
            source={{
              uri: image
                ? image
                : 'https://yekpar.com/writable/uploads/medias/files/istockphoto-1357365823-612x612.jpg',
            }}
            style={styles.image}
          />
          <Text style={styles.priceText}>
            {price ? price + ' ₺' : 'no price information'}
          </Text>
          <Text numberOfLines={1} style={styles.productText}>
            {brand ? brand : 'no title information'}
          </Text>
          <Text numberOfLines={1} style={styles.productText}>
            {description ? description : 'no description information'}
          </Text>
        </View>
        <Button
          title="Add to Cart"
          textStyle={styles.buttonText}
          style={styles.button}
          onPress={onHandlePressButton}
        />
      </>
    </Pressable>
  );
};
