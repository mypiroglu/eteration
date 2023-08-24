import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from '../src/app/components/text';

describe('<Text />', () => {
  it('renders the provided text', () => {
    const {getByText} = render(<Text>Sample Text</Text>);
    expect(getByText('Sample Text')).toBeTruthy();
  });
});
