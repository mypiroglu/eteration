import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const sizing = {
  title: 24,
  subtitle: 18,
  body: 16,
  caption: 14,
  small: 12,
  radius: 20,
  padding: 10,
  componentHeight: 50,
  right: 50,
  left: 20,
  width,
  height,
};

export default sizing;
