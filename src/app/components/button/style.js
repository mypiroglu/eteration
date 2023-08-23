import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.blue, // Özelleştirilebilir
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white, // Özelleştirilebilir
    textAlign: 'center',
    fontWeight: '500',
  },
});
