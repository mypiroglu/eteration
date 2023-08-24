import React from 'react';
import {render} from '@testing-library/react-native';
import {Icon} from '../src/app/components/icon';

describe('Icon Component', () => {
  it('renders the correct icon', () => {
    const iconName = 'Basket';

    const {getByTestId} = render(<Icon icon={iconName} testID="icon" />);

    const iconElement = getByTestId('icon');

    expect(iconElement).toBeTruthy();
  });
});
