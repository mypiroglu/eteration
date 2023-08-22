import React, {useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import {Text, Button, Icon} from '..';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import colors from '../../utils/colors';

export const ProductCard = ({item}) => {
  const {price, brand, image, description} = item;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const onHandlePress = () => {
    navigation.navigate('product-detail-screen', {item});
  };
  const onHandlePressIcon = () => {
    console.log('icon');
    setIsFavorite(!isFavorite);
    // Burada favoriye ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
  };
  const onHandlePressButton = () => {
    console.log('button');
    // Burada sepete ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
  };
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
