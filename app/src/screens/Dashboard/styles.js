import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const STYLES = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: hp('3.1%'),
    fontFamily: 'Rubik-Bold',
    color: '#434343',
  },
  itemContainer: {
    width: wp('34%'),
    height: hp('23%'),
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    margin: hp('1%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
  },
  car: {
    width: wp('40%'),
    height: hp('20%'),
  },
  button: {
    width: wp('100%'), // 80% of width device screen}
    height: hp('6.5%'),
    backgroundColor: '#00c',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signin: {
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2.5%'),
    marginRight: wp('2%'),
  },
});

export default STYLES;
