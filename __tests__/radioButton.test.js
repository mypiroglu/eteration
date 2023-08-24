import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {RadioButton} from '../src/app/components/radio-button';

describe('<RadioButton />', () => {
  it('renders correctly', () => {
    let selectedState = null;
    const setSelectedState = value => {
      selectedState = value;
    };

    const {getByTestId} = render(
      <RadioButton
        item={{id: '1'}}
        setState={setSelectedState}
        state={selectedState}
      />,
    );

    const radioButton = getByTestId('radio-button');

    expect(radioButton).toBeTruthy();
  });

  it('handles onPress event', () => {
    let selectedState = null;
    const setSelectedState = value => {
      selectedState = value;
    };

    const {getByTestId} = render(
      <RadioButton
        item={{id: '1'}}
        setState={setSelectedState}
        state={selectedState}
      />,
    );

    const radioButton = getByTestId('radio-button');

    fireEvent.press(radioButton);

    expect(selectedState).toBe('1');
  });
});
