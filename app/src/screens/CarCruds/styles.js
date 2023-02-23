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
  category: {
    fontSize: hp('2.5%'),
    fontFamily: 'Rubik-Bold',
    color: '#434343',
  },
  TextInput: {
    width: wp('80%'), // 80% of width device screen}
    height: hp('7%'),
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3.7%'),
  },
  TextinputStyle: {
    marginLeft: wp('2.1%'),
    fontFamily: 'Rubik-Regular',
    width: wp('62%'),
  },
  errortxt: {
    width: wp('80%'),
    alignSelf: 'center',
    color: '#FF0000',
    fontFamily: 'Rubik-Regular',
    fontSize: hp('1.5%'),
    marginTop: hp('1%'),
  },
  button: {
    width: wp('80%'), // 80% of width device screen}
    height: hp('6.5%'),
    backgroundColor: '#00c',
    borderRadius: 10,
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
