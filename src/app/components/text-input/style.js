import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';

export default StyleSheet.create({
  root: {
    width: '100%',
    height: sizing.componentHeight,
    padding: sizing.padding,
    borderRadius: sizing.radius,
    borderTopRightRadius: 0,
    backgroundColor: colors.grey,
  },
  container: {
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: sizing.radius,
    borderTopRightRadius: 0,
  },
  searchBar: {
    paddingLeft: sizing.radius * 2,
    color: colors.black,
    width: sizing.width * 0.9,
    backgroundColor: colors.white,
  },
  rightIcon: {
    position: 'absolute',
    right: sizing.padding,
    top: sizing.padding,
  },
  leftIcon: {
    position: 'absolute',
    left: sizing.padding,
    top: sizing.padding * 1.7,
  },
  errortext: {
    fontSize: sizing.body,
    color: colors.grey,
    marginBottom: sizing.padding,
  },
  errorContainer: {
    flexDirection: 'row',
  },
  button: {
    position: 'absolute',
    right: sizing.padding,
    top: sizing.padding * 1.5,
    alignSelf: 'center',
  },
});
