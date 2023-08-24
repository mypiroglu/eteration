import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {InfoProductCard} from '../src/app/components/info-product-card';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('InfoProductCard Component', () => {
  it('renders with primary preset', () => {
    const item = {
      brand: 'Brand Name',
      price: 99.99,
      image: 'https://example.com/image.jpg',
      description: 'Product Description',
    };
    const data = {item, quantity: 3};
    const {getByText} = render(
      <InfoProductCard data={data} preset="primary" />,
    );

    expect(getByText('Brand Name')).toBeTruthy();
    expect(getByText('99.99 TL')).toBeTruthy();
    expect(getByText('Product Description')).toBeTruthy();
    expect(getByText('3')).toBeTruthy();
  });

  it('renders with secondary preset', () => {
    const item = {
      brand: 'Brand Name',
      price: 99.99,
      image: 'https://example.com/image.jpg',
      description: 'Product Description',
    };
    const data = {item, quantity: 3};
    const {getByText} = render(
      <InfoProductCard data={data} preset="secondary" />,
    );

    expect(getByText('Brand Name')).toBeTruthy();
    expect(getByText('99.99 TL')).toBeTruthy();
    expect(getByText('Product Description')).toBeTruthy();

    expect(getByText('Add to Basket')).toBeTruthy();
  });

  it('calls navigation when pressed', () => {
    const item = {
      brand: 'Brand Name',
      price: 99.99,
      image: 'https://example.com/image.jpg',
      description: 'Product Description',
    };
    const data = {item, quantity: 3};
    const {getByText} = render(
      <InfoProductCard data={data} preset="primary" />,
    );

    const pressable = getByText('Brand Name');
    fireEvent.press(pressable);
    expect(
      require('@react-navigation/native').useNavigation().navigate,
    ).toMatchSnapshot();
  });
});
