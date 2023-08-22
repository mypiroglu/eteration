import {StyleSheet} from 'react-native';
import sizing from '../../theme/sizing';
export default StyleSheet.create({
  root: {
    flexGrow: 1,
    paddingBottom: sizing.componentHeight * 2,
  },
  imageBackground: {
    width: sizing.width,
    height: 250,
  },
  image: {
    width: sizing.width,
    height: 250,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  changeInfoButton: {
    marginTop: -sizing.marginHorizontal * 3,
    fontWeight: '200',
  },
  changeInfoText: {
    fontWeight: '400',
  },
  name: {
    fontSize: sizing.title,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: sizing.marginHorizontal * 2,
    marginBottom: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: sizing.padding,
    marginBottom: sizing.componentHeight * 2,
  },
});
