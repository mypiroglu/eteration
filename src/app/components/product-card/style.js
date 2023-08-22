import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';
import globalStyles from '../../theme/styles';
export default StyleSheet.create({
  root: {
    width: (sizing.width - sizing.padding * 2) / 2,
    height: sizing.componentHeight * 5,
    padding: sizing.padding,
    borderRadius: sizing.radius,
    borderTopRightRadius: 0,
    backgroundColor: colors.white,
    ...globalStyles.shadow,
  },
  image: {
    backgroundColor: 'red',
    width: (sizing.width - sizing.padding * 2) / 2 - sizing.padding * 2,
    height: sizing.componentHeight * 2.5,
    alignSelf: 'center',
  },
  priceText: {
    fontSize: sizing.subtitle,
    fontWeight: '500',
    color: colors.blue,
    marginTop: sizing.padding,
    lineHeight: 17.07,
  },
  productText: {
    fontSize: sizing.subtitle,
    fontWeight: '500',
    lineHeight: 17.07,
    color: colors.black,
  },
});
