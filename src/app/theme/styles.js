import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const globalStyles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    shadowColor: colors.black,
  },
});

export default globalStyles;
