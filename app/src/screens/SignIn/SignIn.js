import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
export default function SignIn() {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [checkemail, setCheckemail] = useState(false);
  const [emailerror, setEmailerror] = useState('');
  const [checkpassword, setCheckpassword] = useState(false);
  const [passworderror, setPassworderror] = useState('');
  const [Show, setShow] = useState(false);
  const [Visible, setVisible] = useState(true);

  const Login = async () => {
    let emailreg =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    try {
      if (Email == '') {
        setCheckemail(true);
        setEmailerror('Enter Email');
        return false;
      }
      if (emailreg.test(Email.trim()) === false) {
        setCheckemail(true);
        setEmailerror('Enter Valid Email');
        return false;
      }
      if (Password == '') {
        setCheckpassword(true);
        setPassworderror('Enter Password');
        return false;
      }
      if (Password.length < 6) {
        setCheckpassword(true);
        setPassworderror('Password should be greater than six characters!');
        return false;
      }
      const userEmail = await AsyncStorage.getItem('Email');
      const userPassword = await AsyncStorage.getItem('Password');
      console.log(userEmail, userPassword);
      if (userEmail == '' && userPassword == '') {
        setCheckpassword(true);
        setPassworderror('Please,First Create Account then SignIn');
      }
      if (userEmail == Email && userPassword == Password) {
        navigation.replace('Dashboard');
      } else {
        setCheckpassword(true);
        setPassworderror('Invalid Email or Password');
      }
    } catch (error) {
      setCheckpassword(true);
      setPassworderror('Invalid Email or Password');
      setLoading(false);
    }
  };
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../src/assets/images/caricon.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.welcome}>SignIn</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.TextInput}>
            <View style={{marginLeft: 10}}>
              <Image
                style={styles.email}
                source={require('../../../src/assets/images/email.png')}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={styles.TextinputStyle}
              placeholder="Enter your email"
              value={Email}
              onChangeText={text => {
                setEmail(text);
                setCheckemail(false);
              }}
            />
          </View>
        </View>
        {checkemail ? <Text style={styles.errortxt}>{emailerror}</Text> : null}
        <View style={{alignItems: 'center'}}>
          <View style={styles.TextInput}>
            <View style={{marginLeft: 10}}>
              <Image
                style={styles.lock}
                source={require('../../../src/assets/images/lock.png')}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={styles.TextinputStyle}
              placeholder="Enter your password"
              secureTextEntry={Visible}
              value={Password}
              onChangeText={text => {
                setPassword(text);
                setCheckpassword(false);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setVisible(!Visible);
                setShow(!Show);
              }}>
              <Image
                style={styles.lock}
                source={require('../../../src/assets/images/eye.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        {checkpassword ? (
          <Text style={styles.errortxt}>{passworderror}</Text>
        ) : null}
        <View style={{alignItems: 'center', marginTop: hp('30%')}}>
          <TouchableOpacity onPress={() => Login()} style={styles.button}>
            <Text style={styles.signin}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
