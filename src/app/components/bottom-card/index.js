import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../';
import styles from './style';

export const BottomCard = ({title = 'Add to cart', price, onPress, style}) => {
  return (
    <View style={[styles.bottomContainer, style]}>
      <View>
        <Text style={styles.priceText}>Price:</Text>
        <Text style={styles.priceNumber}>{price} ₺</Text>
      </View>
      <Button title={title} onPress={onPress} />
      {/* burada sepete eklenecek */}
    </View>
  );
};
