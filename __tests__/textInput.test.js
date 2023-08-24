import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TextInput} from '../src/app/components/text-input';

describe('<TextInput />', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <TextInput placeholder="Test Placeholder" />,
    );

    const input = getByPlaceholderText('Test Placeholder');

    expect(input).toBeTruthy();
  });

  it('handles onChangeText event', () => {
    const onChangeTextMock = jest.fn();
    const {getByPlaceholderText} = render(
      <TextInput
        placeholder="Test Placeholder"
        onChangeText={onChangeTextMock}
      />,
    );

    const input = getByPlaceholderText('Test Placeholder');

    fireEvent.changeText(input, 'Test Input');

    expect(onChangeTextMock).toHaveBeenCalled();
    expect(onChangeTextMock).toHaveBeenCalledWith('Test Input');
  });
});
