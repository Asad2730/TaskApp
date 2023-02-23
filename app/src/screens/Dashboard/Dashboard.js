import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setCars, setcarID } from '../../redux/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard() {
  const navigation = useNavigation();
  const { cars } = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {

    AsyncStorage.getItem('Cars')
      .then(jsonStr => JSON.parse(jsonStr))
      .then(arr => {
        dispatch(setCars(arr));
      })
      .catch(error => console.log(error));

    // AsyncStorage.getItem('Cars')
    //   .then(cars => {
    //     const parsedCars = JSON.parse(cars);
    //     if (parsedCars && typeof parsedCars === 'object') {
    //       dispatch(setCars(parsedCars));
    //     }
    //   })
    //   .catch(err => console.log(err));
  };

  // const CARS = [
  //   {
  //     id: 1,
  //     name: 'Honda City',
  //     image: require('../../../src/assets/images/Altis.png'),
  //     reg_no: 'PF 459 ',
  //   },
  //   {
  //     id: 2,
  //     name: 'Corrolla Altis',
  //     image: require('../../../src/assets/images/Altis.png'),
  //     reg_no: 'ATS 921 ',
  //   },
  //   {
  //     id: 3,
  //     name: 'Suzuki Alto',
  //     image: require('../../../src/assets/images/Altis.png'),
  //     reg_no: 'ATB 359 ',
  //   },
  //   {
  //     id: 4,
  //     name: 'Suzuki Swift',
  //     image: require('../../../src/assets/images/Altis.png'),
  //     reg_no: 'AFS 239 ',
  //   },
  //   {
  //     id: 5,
  //     name: 'Hyundai Tucson',
  //     image: require('../../../src/assets/images/Altis.png'),
  //     reg_no: 'AMH 243 ',
  //   },
  // ];

  const deleteCars = async (id) => {
    let data = await AsyncStorage.getItem('Cars')
    let jsn = JSON.parse(data)
    AsyncStorage.removeItem('Cars')
    let newCars = [];
    Object.keys(jsn).map(i => {
      if (jsn[i].ID !== id) {

        newCars.push({ i: jsn[i] })
        AsyncStorage.setItem('Cars', JSON.stringify(newCars))
          .then(() => {
            dispatch(setCars(newCars));

          })
          .catch(err => console.log(err));
      }
    })

  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setcarID(item.ID));
          navigation.navigate('CarCruds');
        }}
        style={styles.itemContainer}>
        <View style={{ alignItems: 'center', marginTop: hp('-3.5%') }}>
          <Text
            onPress={() => {

              deleteCars(item.ID)
            }}
            style={{ fontSize: hp('1.9%'), color: '#808080' }}>
            'Delete'
          </Text>
          <Text style={{ fontSize: hp('2%'), color: '#000' }}>
            {item.category}
          </Text>
          <Text style={{ fontSize: hp('1.9%'), color: '#808080' }}>
            {item.reg_no}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  console.log(cars);
  return (
    <View style={styles.Container}>
      <View style={{ alignItems: 'center', marginVertical: '5%' }}>
        <Text style={styles.welcome}>Registared Cars</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cars}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          ListEmptyComponent={() => {
            return (
              <View style={{ marginTop: hp('35%') }}>
                <Text>No Cars Added Yet..</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: hp('3%') }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CarCruds')}
          style={styles.button}>
          <Text style={styles.signin}>Add </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
