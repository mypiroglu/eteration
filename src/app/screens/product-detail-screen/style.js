import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  imageContainer: {
    width: sizing.width - sizing.padding * 2,
    height: 300,
    marginHorizontal: sizing.padding,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: sizing.title,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: sizing.padding,
  },
  description: {
    fontSize: sizing.body,
    color: colors.black,
    fontWeight: '300',
    textAlign: 'justify',
    lineHeight: 20,
    marginHorizontal: sizing.padding,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 5,
    zIndex: 999,
  },
  bottomContainer: {
    position: 'relative',
    bottom: 0,
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
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    width: sizing.width,
  },
});
