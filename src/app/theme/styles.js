import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const globalStyles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    shadowColor: colors.black,
  },
});

export default globalStyles;
