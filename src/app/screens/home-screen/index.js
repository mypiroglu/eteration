import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Modal,
  Alert,
  SafeAreaView,
  Keyboard,
  Platform,
} from 'react-native';
import styles from './style';
import {
  Button,
  Header,
  ProductCard,
  TextInput,
  Text,
  RadioButton,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../api';
import colors from '../../utils/colors';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.products);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState(1);
  const [showProduct, setShowProduct] = useState(data);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  // Klavye açıldığında çalışacak olan olay dinleyici
  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    event => {
      // Klavye açıkken yapılacak işlemler burada
      console.log('Klavye açık');
      const keyboardHeightCalculated = event.endCoordinates.height;
      setKeyboardHeight(keyboardHeightCalculated);
      setKeyboardStatus(true);
    },
  );

  // Klavye kapandığında çalışacak olan olay dinleyici
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      // Klavye kapalıyken yapılacak işlemler burada
      console.log('Klavye kapalı');
      setKeyboardStatus(false);
    },
  );
  function componentWillUnmount() {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
  }

  useEffect(() => {
    console.log(keyboardDidShowListener);
    console.log(keyboardDidShowListener);
  }, [keyboardDidHideListener, keyboardDidShowListener]);
  const RenderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <ProductCard item={item} />
      </View>
    );
  };

  const RenderBrandList = ({item}) => {
    return (
      <View style={styles.radioButtonContainer}>
        <Text style={styles.radioButtonText}>{item.brand}</Text>
      </View>
    );
  };

  const RenderModelList = ({item}) => {
    return (
      <View style={styles.radioButtonContainer}>
        <Text style={styles.radioButtonText}>{item.model}</Text>
      </View>
    );
  };

  const sortAscending = () => {
    const sortedProduct = [...data].sort((a, b) => a.price - b.price);
    setShowProduct(sortedProduct);
  };

  const sortDescending = () => {
    const sortedProduct = [...data].sort((a, b) => b.price - a.price);
    setShowProduct(sortedProduct);
  };

  const RenderSortBy = ({item}) => {
    return (
      <View style={styles.radioButtonContainer}>
        <RadioButton
          setState={setSelectedSort}
          item={item}
          state={selectedSort === item.id}
        />
        <Text style={styles.radioButtonText}>{item.name}</Text>
      </View>
    );
  };

  const filteredData =
    searchText !== '' &&
    data.filter(item => {
      return (
        item.brand.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase()) ||
        item.model.toLowerCase().includes(searchText.toLowerCase()) ||
        item.price.toString().includes(searchText.toLowerCase()) ||
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });

  const sortBy = [
    {
      id: 1,
      name: 'Old to New',
    },
    {
      id: 2,
      name: 'New to Old',
    },
    {
      id: 3,
      name: 'Price high to low',
    },
    {
      id: 4,
      name: 'Price low to high',
    },
  ];

  useEffect(() => {
    switch (selectedSort) {
      case 1:
        setShowProduct(data);
        break;
      case 2:
        setShowProduct(data);
        break;
      case 3:
        sortDescending();
        break;
      case 4:
        sortAscending();
        break;
      default:
        setShowProduct(data);
        break;
    }
  }, [selectedSort, data]);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return isLoading ? (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  ) : (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <TextInput
        placeholder={'Search'}
        isSearch
        text={searchText}
        onChangeText={setSearchText}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <SafeAreaView style={styles.modal}>
          <Header
            title="Home Screen"
            leftIcon={'Back'}
            onLeftPress={() => setModalVisible(false)}
          />
          <View style={styles.modalContainer}>
            <Text>Sort By</Text>
            <View style={styles.modelContentContainer}>
              <FlatList
                data={sortBy}
                renderItem={RenderSortBy}
                keyExtractor={(item, index) => index}
              />
            </View>
            <View style={styles.divider} />
            <Text>Brand</Text>
            <TextInput
              placeholder={'Search'}
              isSearch
              text={searchText}
              onChangeText={setSearchText}
            />
            <View style={styles.modelContentContainer}>
              <FlatList
                data={data}
                renderItem={RenderBrandList}
                keyExtractor={(item, index) => index}
              />
            </View>
            <View style={styles.divider} />
            <Text>Model</Text>
            <TextInput
              placeholder={'Search'}
              isSearch
              text={searchText}
              onChangeText={setSearchText}
            />
            <View style={styles.modelContentContainer}>
              <FlatList
                data={data}
                renderItem={RenderModelList}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      {searchText.length > 0 ? (
        <View
          style={
            !keyboardStatus
              ? [
                  styles.searchProductsContainer,
                  {marginBottom: Platform.OS === 'ios' ? 75 : 85},
                ]
              : [
                  styles.searchProductsContainer,
                  {
                    marginBottom:
                      Platform.OS === 'ios' ? keyboardHeight - 30 : 0,
                  },
                ]
          }>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={filteredData}
            renderItem={RenderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      ) : (
        <>
          <Button
            title="Filter"
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <View style={styles.productsContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={showProduct}
              renderItem={RenderItem}
              keyExtractor={(item, index) => index}
            />
          </View>
        </>
      )}
    </View>
  );
};
