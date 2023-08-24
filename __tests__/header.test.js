import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Header} from '../src/app/components/header'; // Import the Header component
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
jest.mock('@react-navigation/native');

describe('Header Component', () => {
  it('renders title correctly', () => {
    const {getByText} = render(<Header title="Test Title" />);

    const titleElement = getByText('Test Title');
    expect(titleElement).toBeTruthy();
  });

  it('renders left and right icons', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Header title="Test Title" leftIcon="Star" rightIcon="Star" />,
      </NavigationContainer>,
    );
  });
});
