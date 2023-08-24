import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from '../src/app/components/text'; // Lütfen bu yolu doğru bir şekilde güncelleyin

describe('<Text />', () => {
  // Metni doğru bir şekilde gösterip göstermediğini kontrol ediyor
  it('renders the provided text', () => {
    const {getByText} = render(<Text>Sample Text</Text>);
    expect(getByText('Sample Text')).toBeTruthy();
  });

  // onPress fonksiyonunun tetiklenip tetiklenmediğini kontrol ediyor
  it('triggers the onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<Text onPress={onPressMock}>Press Me</Text>);

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  // onPress verilmediğinde varsayılan stili kullanıp kullanmadığını kontrol ediyor
  it('has the default style when not pressable', () => {
    const {getByText} = render(<Text>Styled Text</Text>);
    const textElement = getByText('Styled Text');

    // Stilinizi doğru bir şekilde kontrol edin. Burada sadece bir örnek kullanıldı.
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([{color: 'red'}]),
    );
  });

  // onPress verildiğinde tıklanabilir stilini kullanıp kullanmadığını kontrol ediyor
  it('has the pressable style when onPress is provided', () => {
    const {getByText} = render(<Text onPress={() => {}}>Pressable Text</Text>);
    const textElement = getByText('Pressable Text');

    // Stilinizi doğru bir şekilde kontrol edin. Burada sadece bir örnek kullanıldı.
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([{color: 'red'}]),
    );
  });
});
