import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {Button, Header, Icon, BottomCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

export const ProductDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const onHandlePressIcon = () => {
    console.log('icon');
    setIsFavorite(!isFavorite);
    // Burada favoriye ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
  };
  const onHandlePressBack = () => {
    navigation.goBack();
  };
  console.log('item', item);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <Header
          style={styles.header}
          title={item.brand}
          leftIcon={'Back'}
          onLeftPress={onHandlePressBack}
        />
        <View style={styles.imageContainer}>
          <Pressable style={styles.icon} onPress={onHandlePressIcon}>
            <Icon
              icon={isFavorite ? 'Star' : 'UnStar'}
              width="30"
              height="30"
              style={styles.icon}
            />
          </Pressable>
          <Image style={styles.image} source={{uri: item.image}} />
          <Text style={styles.title}>
            <Text>{item.brand} </Text>
            <Text>{item.name}</Text>
          </Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>
      <BottomCard price={item.price} style={styles.bottomContainer} />
    </SafeAreaView>
  );
};
