import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: sizing.padding,
    paddingHorizontal: sizing.padding,
    alignItems: 'center',
  },
  imageContainer: {
    width: sizing.width - sizing.padding * 2,
    height: 300,
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
  },
  description: {
    fontSize: sizing.body,
    color: colors.black,
    fontWeight: '300',
    textAlign: 'justify',
    lineHeight: 20,
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
    padding: sizing.padding,
    paddingHorizontal: sizing.padding,
  },
  header: {
    width: sizing.width,
    marginLeft: -sizing.padding,
  },
});
