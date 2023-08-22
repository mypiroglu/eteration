import React from 'react';
import {View, Image} from 'react-native';
import {Text, Button} from '..';
import styles from './style';

export const ProductCard = ({price, title, img}) => {
  return (
    <View style={styles.root}>
      <View style={styles.image}>
        <Image
          source={{
            uri: img
              ? img
              : 'https://yekpar.com/writable/uploads/medias/files/istockphoto-1357365823-612x612.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.priceText}>
          {price ? price + ' ₺' : 'no price information'}
        </Text>
        <Text numberOfLines={2} style={styles.productText}>
          {title ? title + '₺' : 'no title information'}
        </Text>
        <Button title="Add to Cart" disabled />
      </View>
    </View>
  );
};
