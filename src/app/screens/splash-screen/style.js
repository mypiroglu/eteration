import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';
export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: colors.white,
    height: 196,
    width: 226,
  },
  splashLogo: {
    height: 200,
    width: 200,
  },
  splashText: {
    marginTop: sizing.padding * 10,
    fontSize: sizing.body,
    fontWeight: 'bold',
    color: colors.black,
  },
});
