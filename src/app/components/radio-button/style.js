import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  root: {
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: colors.orange,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inside: {
    borderRadius: 7.5,
    width: 15,
    height: 15,
    backgroundColor: colors.orange,
  },
});
