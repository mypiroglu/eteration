import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '../src/app/components/button';

describe('<Button />', () => {
  it('matches the snapshot', () => {
    const {toJSON} = render(
      <Button title="Click Me" style={{backgroundColor: 'red'}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
