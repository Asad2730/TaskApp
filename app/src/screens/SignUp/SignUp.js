import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  const [Visible, setVisible] = useState(true);
  const [checkemail, setCheckemail] = useState(false);
  const [emailerror, setEmailerror] = useState('');
  const [checkpassword, setCheckpassword] = useState(false);
  const [passworderror, setPassworderror] = useState('');
  const [checkusername, setcheckusername] = useState(false);
  const [usernamerror, setusernamerror] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Username, setUsername] = useState('');

  //console.log(Password);
  const SignUp = async () => {
    console.log('Here')
    console.log(Email, Password)
    let emailreg =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (Username == '') {
      setcheckusername(true);
      setusernamerror('Enter Username');
      return false;
    }
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
    await AsyncStorage.setItem('Username', Username);
    await AsyncStorage.setItem('Email', Email);
    await AsyncStorage.setItem('Password', Password);
    Alert.alert('Success', 'Account Created Successfully');
    navigation.replace('SignIn');
    const userEmail = await AsyncStorage.getItem('Email');
    const userPassword = await AsyncStorage.getItem('Password');
    console.log(userEmail, userPassword);
  };
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.backView}>
          <TouchableOpacity
            style={{ paddingHorizontal: '2%' }}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Image
              style={styles.back}
              source={require('../../../src/assets/images/back.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../src/assets/images/caricon.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.forget}>SignUp</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.TextInput}>
            <View style={{ marginLeft: 10 }}>
              <Image
                style={styles.person}
                source={require('../../../src/assets/images/person.png')}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={styles.TextinputStyle}
              placeholder="Enter username"
              value={Username}
              onChangeText={text => {
                setUsername(text);
                setcheckusername(false);
              }}
            />
          </View>
        </View>
        {checkusername ? (
          <Text style={styles.errortxt}>{usernamerror}</Text>
        ) : null}
        <View style={{ alignItems: 'center' }}>
          <View style={styles.TextInput}>
            <View style={{ marginLeft: 10 }}>
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
        <View style={{ alignItems: 'center' }}>
          <View style={styles.TextInput}>
            <View style={{ marginLeft: 10 }}>
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
            <TouchableOpacity onPress={() => setVisible(!Visible)}>
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
        <View style={{ alignItems: 'center', marginTop: hp('19%') }}>
          <TouchableOpacity onPress={() => SignUp()} style={styles.button}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
