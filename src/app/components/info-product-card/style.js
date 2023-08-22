import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import sizing from '../../theme/sizing';
import globalStyles from '../../theme/styles';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: sizing.margin,
    borderRadius: sizing.radius,
    ...globalStyles.shadow,
    height: sizing.componentHeight * 3,
    flexDirection: 'row',
    padding: sizing.padding,
    marginVertical: sizing.padding,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: sizing.padding,
    flex: 1,
    paddingTop: 30,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 20,
  },
  brand: {
    fontSize: sizing.body,
    fontWeight: 'bold',
    width: '55%',
  },
  price: {
    fontSize: sizing.subtitle,
    fontWeight: 'bold',
    color: colors.blue,
  },
  description: {
    fontSize: sizing.body,
    fontWeight: 'bold',
    width: '100%',
    color: colors.gray,
  },
  button: {
    width: '40%',
    height: 40,
    backgroundColor: colors.blue,
    borderRadius: sizing.radius,
  },
  icon: {
    fontSize: sizing.subtitle,
    color: colors.primary,
  },
  imageContainer: {
    width: '40%',
    height: '100%',
  },
});
