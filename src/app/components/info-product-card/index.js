import React, {useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import {Text, Button} from '..';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

export const InfoProductCard = ({item, preset = 'primary'}) => {
  const {price, brand, image, description} = item;
  const [count, setCount] = useState(0);
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
    <View style={styles.container}>
      <Pressable style={styles.imageContainer} onPress={onHandlePress}>
        <Image source={{uri: image}} style={styles.image} />
      </Pressable>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text numberOfLines={2} style={styles.brand}>
            {brand}
          </Text>
          <Text style={styles.price}>{price} TL</Text>
        </View>
        <View style={styles.info}>
          <Text numberOfLines={2} style={styles.description}>
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
            <Text>{count}</Text>
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
    </View>
  );
};
