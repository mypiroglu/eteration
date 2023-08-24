import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ProductCard} from '../src/app/components/product-card';
import {Provider} from 'react-redux';
import store from '../src/app/redux/store';

describe('<ProductCard />', () => {
  it('renders correctly', () => {
    const {getByText, getByTestId} = render(
      <Provider store={store}>
        <ProductCard
          item={{
            price: 100,
            brand: 'Example Brand',
            image: 'https://example.com/image.jpg',
            description: 'Example Description',
          }}
        />
      </Provider>,
    );

    const priceText = getByText('100 ₺');
    expect(priceText).toBeTruthy();

    const brandText = getByText('Example Brand');
    expect(brandText).toBeTruthy();

    const descriptionText = getByText('Example Description');
    expect(descriptionText).toBeTruthy();

    const favoriteIcon = getByTestId('favorite-icon');
    expect(favoriteIcon).toBeTruthy();
  });

  it('handles onPress events', () => {
    let isFavorite = false;
    const setIsFavorite = value => {
      isFavorite = value;
    };

    const {getByTestId} = render(
      <Provider store={store}>
        <ProductCard
          item={{
            price: 100,
            brand: 'Example Brand',
            image: 'https://example.com/image.jpg',
            description: 'Example Description',
          }}
        />
        ,
      </Provider>,
    );

    const favoriteIcon = getByTestId('favorite-icon');

    fireEvent.press(favoriteIcon);

    expect(isFavorite).toBe(true);
  });
});
