import {View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash() {
  const navigation = useNavigation();

  const getUser = async () => {
    let user = await AsyncStorage.getItem('Email');
    if (user === null) {
      navigation.replace('SignUp');
    } else {
      navigation.replace('Dashboard');
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle={'dark-content'} />
      <Image
        style={styles.image}
        source={require('../../../src/assets/images/caricon.png')}
        resizeMode="contain"
      />
    </View>
  );
}
