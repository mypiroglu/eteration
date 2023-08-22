import {StyleSheet} from 'react-native';
import sizing from '../../theme/sizing';
import colors from '../../utils/colors';

export default StyleSheet.create({
  text: {
    fontSize: sizing.body,
    color: colors.black,
  },
  buttonText: {
    fontSize: sizing.body,
    fontWeight: '600',
    color: colors.cinnabar,
  },
});
