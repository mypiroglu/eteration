import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ProductCard} from '../src/app/components/product-card';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {NavigationContainer} from '@react-navigation/native';
import {
  addToFavorites,
  removeFromFavorites,
} from '../src/app/redux/slice/favorites-slice';
import {
  addToBasket,
  removeFromBasket,
} from '../src/app/redux/slice/basket-slice';

const mockStore = configureMockStore();

describe('Redux Actions', () => {
  it('should create an action to add a product to favorites', () => {
    const product = {id: 1, name: 'Example Product'};
    const expectedAction = {
      type: 'favoritesSlice/addToFavorites',
      payload: product,
    };
    expect(addToFavorites(product)).toEqual(expectedAction);
  });

  it('should create an action to remove a product from favorites', () => {
    const productId = 1;
    const expectedAction = {
      type: 'favoritesSlice/removeFromFavorites',
      payload: productId,
    };
    expect(removeFromFavorites(productId)).toEqual(expectedAction);
  });

  it('should create an action to add a product to the basket', () => {
    const product = {id: 1, name: 'Example Product'};
    const quantity = 2;
    const expectedAction = {
      type: 'basketSlice/addToBasket',
      payload: {product, quantity},
    };
    expect(addToBasket({product, quantity})).toEqual(expectedAction);
  });

  it('should create an action to remove a product from the basket', () => {
    const productId = 1;
    const expectedAction = {
      type: 'basketSlice/removeFromBasket',
      payload: productId,
    };
    expect(removeFromBasket(productId)).toEqual(expectedAction);
  });
});

describe('<ProductCard />', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      favorites: {
        favorites: [],
      },
    });
  });

  it('renders correctly', () => {
    const item = {
      price: 100,
      brand: 'Example Brand',
      image:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Example Description',
    };

    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <ProductCard item={item} />
        </NavigationContainer>
      </Provider>,
    );
  });

  it('handles addToFavorites and removeFromFavorites', () => {
    const item = {
      price: 100,
      brand: 'Example Brand',
      image:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Example Description',
    };

    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <ProductCard item={item} />
        </NavigationContainer>
      </Provider>,
    );

    const favoriteIcon = getByTestId('Star');

    fireEvent.press(favoriteIcon);
    const actions = store.getActions();
    expect(actions).toMatchSnapshot();

    fireEvent.press(favoriteIcon);
    const newActions = store.getActions();
    expect(newActions).toMatchSnapshot();
  });

  it('handles addToBasket', () => {
    const item = {
      price: 100,
      brand: 'Example Brand',
      image:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Example Description',
    };

    const {getByText} = render(
      <Provider store={store}>
        <NavigationContainer>
          <ProductCard item={item} />
        </NavigationContainer>
      </Provider>,
    );

    const addButton = getByText('Add to Cart');

    fireEvent.press(addButton);
    const actions = store.getActions();
    const expectedAction = addToBasket({item: item, quantity: 1});
    expect(actions).toEqual([expectedAction]);
  });
});
