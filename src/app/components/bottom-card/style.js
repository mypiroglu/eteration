import {StyleSheet, Platform} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';

export default StyleSheet.create({
  bottomContainer: {
    alignSelf: 'center',
    width: sizing.width - sizing.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizing.margin,
    position: 'relative',
    bottom: Platform.OS === 'ios' ? 75 : 85,
    left: 0,
    right: 0,
    padding: sizing.padding,
    backgroundColor: colors.white,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  priceText: {
    fontSize: sizing.body,
    fontWeight: 'bold',
    color: colors.blue,
  },
  priceNumber: {
    fontSize: sizing.body,
    fontWeight: 'bold',
    color: colors.black,
  },
});
