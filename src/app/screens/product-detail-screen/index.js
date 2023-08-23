import React, {useState, useEffect} from 'react';
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
import {addToBasket} from '../../redux/slice/basket-slice';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/slice/favorites-slice';

export const ProductDetailScreen = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {item} = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const {favorites} = useSelector(state => state.favorites);

  const onHandlePressIcon = () => {
    isFavorite
      ? dispatch(removeFromFavorites(item))
      : dispatch(addToFavorites(item));
    setIsFavorite(!isFavorite);
    // Burada favoriye ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
  };
  const onHandlePressBack = () => {
    navigation.goBack();
  };
  console.log('item', item);
  const onHandlePressAddToBasket = () => {
    // Burada sepete ekleme işlemi yapılacak. Sonra redux'a taşınacak. ASYNC STORAGE KULLANILACAK.
    const quantity = 1;
    dispatch(addToBasket({item: item, quantity: quantity}));
  };
  useEffect(() => {
    const favoriteState = favorites.find(favorite => favorite.id === item.id);
    if (favoriteState) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [item]);
  useEffect(() => {
    console.log('item', item.description);
  }, [item]);
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
        </View>
        <Text style={styles.title}>
          <Text>{item.brand} </Text>
          <Text>{item.name}</Text>
        </Text>
        <Text style={styles.description}>
          {item.description}asdasdasdasdasd
        </Text>
      </ScrollView>
      <BottomCard
        price={item.price}
        style={styles.bottomContainer}
        onPress={onHandlePressAddToBasket}
      />
    </SafeAreaView>
  );
};
