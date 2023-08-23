import React, {useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import {Text, Button} from '..';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export const InfoProductCard = ({data, preset = 'primary'}) => {
  const {item, quantity} = data;
  let {brand, price, image, description} = item;
  console.log('item', item);

  const [count, setCount] = useState(1);
  const navigation = useNavigation();
  const onHandlePress = () => {
    navigation.navigate('product-detail-screen', {item: item});
  };

  const onHandlePressAddToBasket = () => {
    // Burada sepete ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
  };
  const onHandlePressIncrease = () => {
    setCount(count + 1);

    // Burada sepete ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
  };
  const onHandlePressDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    // Burada sepete ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
  };
  return (
    <Pressable style={styles.container} onPress={onHandlePress}>
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
