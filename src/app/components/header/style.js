import {StyleSheet} from 'react-native';
import sizing from '../../theme/sizing';
import colors from '../../utils/colors';

export default StyleSheet.create({
  header: {
    height: sizing.componentHeight,
    width: sizing.width,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: sizing.padding,
    backgroundColor: colors.blue,
  },
  titleText: {
    fontWeight: '600',
    fontSize: sizing.title,
    color: colors.white,
  },
  leftButton: {
    left: sizing.padding,
    padding: sizing.padding,
    position: 'absolute',
  },
  rightButton: {
    right: sizing.padding,
    padding: sizing.padding,
    position: 'absolute',
  },
});
