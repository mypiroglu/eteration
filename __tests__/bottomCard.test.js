import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {BottomCard} from '../src/app/components/bottom-card';

describe('BottomCard Component', () => {
  it('renders with default title and price', () => {
    const {getByText} = render(<BottomCard />);

    expect(getByText('Add to cart')).toBeTruthy();
    expect(getByText('Price:')).toBeTruthy();
    expect(getByText('0 ₺')).toBeTruthy();
  });

  it('renders with custom title and price', () => {
    const {getByText} = render(
      <BottomCard title="Custom Title" price={99.99} />,
    );

    expect(getByText('Custom Title')).toBeTruthy();
    expect(getByText('Price:')).toBeTruthy();
    expect(getByText('99.99 ₺')).toBeTruthy();
  });

  it('calls onPress function when button is pressed', () => {
    const onPressMock = jest.fn();

    const {getByText} = render(<BottomCard onPress={onPressMock} />);

    const button = getByText('Add to cart');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });
});
