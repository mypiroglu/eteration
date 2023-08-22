import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';
import globalStyles from '../../theme/styles';
export default StyleSheet.create({
  root: {
    width: (sizing.width - sizing.padding * 4) / 2,
    height: sizing.height / 2.7,
    padding: sizing.padding,
    borderRadius: sizing.radius,
    borderTopRightRadius: 0,
    backgroundColor: colors.white,
    marginVertical: sizing.padding,
    ...globalStyles.shadow,
  },
  image: {
    width: (sizing.width - sizing.padding * 2) / 2 - sizing.padding * 2,
    height: sizing.componentHeight * 3.7,
    alignSelf: 'center',
  },
  priceText: {
    fontSize: sizing.caption,
    fontWeight: '500',
    color: colors.blue,
    marginTop: sizing.padding * 1.5,
    lineHeight: 17.07,
  },
  productText: {
    fontSize: sizing.caption,
    fontWeight: '500',
    lineHeight: 17.07,
    color: colors.black,
  },
  button: {
    bottom: 5,
    position: 'absolute',
    alignSelf: 'center',
    height: sizing.componentHeight * 0.7,
  },
  buttonText: {
    fontSize: sizing.caption,
    fontWeight: '500',
    lineHeight: 17.07,
    color: colors.white,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 999,
  },
});
