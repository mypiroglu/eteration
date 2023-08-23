import {StyleSheet, Platform} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productsContainer: {
    flex: 1,
    paddingHorizontal: sizing.padding,
    marginBottom: Platform.OS === 'ios' ? 75 : 85,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: sizing.padding - 5,
  },
  radioButtonText: {
    fontSize: sizing.caption,
    marginLeft: sizing.padding,
  },
  divider: {
    height: 1,
    backgroundColor: colors.blackOpacity,
    marginVertical: sizing.padding,
    width: '90%',
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.grey,
    paddingHorizontal: sizing.padding,
  },
});
