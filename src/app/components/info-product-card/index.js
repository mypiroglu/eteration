import React, {useState} from 'react';
import {View, Image, Pressable, Alert} from 'react-native';
import {Text, Button} from '..';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  plusOne,
  minusOne,
  addToBasket,
  removeFromBasket,
} from '../../redux/slice/basket-slice';
import {removeFromFavorites} from '../../redux/slice/favorites-slice';

export const InfoProductCard = ({data, preset = 'primary'}) => {
  const {item, quantity} = data;
  let {brand, price, image, description} = item;

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const navigation = useNavigation();
  const onHandlePress = () => {
    navigation.navigate('product-detail-screen', {item: item});
  };

  const onHandleLongPress = () => {
    Alert.alert(
      'warning',
      preset === 'primary'
        ? 'Remove Item From Basket'
        : 'Remove Item From Favorite',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            preset === 'primary'
              ? dispatch(removeFromBasket({item: item}))
              : dispatch(removeFromFavorites(item)),
        },
      ],
    );
  };
  const onHandlePressAddToBasket = () => {
    const quantity = 1;
    dispatch(addToBasket({item: item, quantity: quantity}));
  };
  const onHandlePressIncrease = () => {
    setCount(count + 1);
    dispatch(plusOne(item));
  };
  const onHandlePressDecrease = () => {
    if (quantity - 1 === 0) {
      onHandleLongPress();
    } else if (quantity - 1 > 0) {
      setCount(count - 1);
      dispatch(minusOne(item));
    }
  };
  return (
    <Pressable
      style={styles.container}
      onPress={onHandlePress}
      onLongPress={onHandleLongPress}>
      <Pressable style={styles.imageContainer} onPress={onHandlePress}>
        <Image source={{uri: image}} style={styles.image} />
      </Pressable>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.brand}>
            {brand}
          </Text>
          <Text style={styles.price}>{price} TL</Text>
        </View>
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.description}>
            {description}
          </Text>
        </View>
        {preset === 'primary' ? (
          <View style={styles.infoButton}>
            <Button
              onPress={onHandlePressDecrease}
              title="-"
              style={styles.button}
            />
            <Text>{quantity}</Text>
            <Button
              onPress={onHandlePressIncrease}
              title="+"
              style={styles.button}
            />
          </View>
        ) : (
          <Button
            title="Add to Basket"
            onPress={onHandlePressAddToBasket}
            style={styles.buttonAdd}
          />
        )}
      </View>
    </Pressable>
  );
};
