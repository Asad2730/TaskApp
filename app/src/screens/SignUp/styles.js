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
  image: {
    height: hp('12%'), // 70% of height device screen
    width: wp('24%'), // 80% of width device screen}
    marginTop: hp('-1%'),
    marginBottom: hp('3%'),
  },
  back: {
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen}
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backView: {
    padding: 10,
    width: wp('12%'),
  },
  TextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forget: {
    fontSize: hp('3.1%'),
    fontFamily: 'Rubik-Bold',
    color: '#434343',
  },
  reset: {
    fontSize: hp('1.9%'),
    fontFamily: 'Rubik-Regular',
    padding: 10,
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
  person: {
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen}
    justifyContent: 'center',
  },
  signup: {
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2.5%'),
    marginRight: wp('2%'),
  },
  bottomView: {
    flexDirection: 'row',
    padding: 10,
  },
  signIn: {
    color: '#00c',
    fontFamily: 'Rubik-Medium',
    fontSize: hp('2%'),
    marginLeft: wp('1.5%'),
    marginRight: wp('2%'),
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
  email: {
    height: hp('5%'), // 70% of height device screen
    width: wp('5%'), // 80% of width device screen}
    justifyContent: 'center',
  },
  lock: {
    height: hp('4.5%'), // 70% of height device screen
    width: wp('4.5%'), // 80% of width device screen}
    justifyContent: 'center',
  },
  account: {
    fontFamily: 'Rubik-Regular',
    fontSize: hp('1.8%'),
    color: '#434343',
  },
  errortxt: {
    width: wp('80%'),
    alignSelf: 'center',
    color: '#FF0000',
    fontFamily: 'Rubik-Regular',
    fontSize: hp('1.5%'),
    marginTop: hp('1%'),
  },
});

export default STYLES;
