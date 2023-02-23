import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
//import { useDispatch, useSelector } from 'react-redux';
// import { setCars, setcarID } from '../../redux/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard() {
  const navigation = useNavigation();
  //const { cars } = useSelector(state => state.taskReducer);
  //const dispatch = useDispatch();
  const [cars, setCars] = useState([]);


  // const getCars = () => {
  //   AsyncStorage.getItem('Cars')
  //     .then(cars => {
  //       console.log('Cars', cars)
  //       const parsedCars = JSON.parse(cars);
  //       if (parsedCars && typeof parsedCars === 'object') {
  //         dispatch(setCars(parsedCars));
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };


  // const getCars = () => {
  //   AsyncStorage.getItem('Cars')
  //     .then(i => {
  //       console.log('i', i)
  //       setCars(i)
  //     }).catch(err => console.log('error', err))
  // }


  const getCars = async () => {
    try {
      let data = await AsyncStorage.getItem('Cars')
      console.log('Data2', data)
      if (data !== null) {
        let jsn = JSON.parse(data)
        console.log('data', jsn.ID)
        setCars(jsn)
        console.log('cars', cars)
      }

    } catch (ex) {
      console.log('ex', ex)
    }
  }

  useEffect(() => {
    getCars();
  }, []);

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


  const renderItem = ({ item }) => {
    console.log('ITEM', item)
    console.log('ITEMCat', item.category)
    return (
      <TouchableOpacity

        onPress={() => {
          //dispatch(setcarID(item.ID));
          navigation.navigate('CarCruds');
        }}
        style={styles.itemContainer}>
        <View style={{ alignItems: 'center', marginTop: hp('-3.5%') }}>
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


  return (
    <View style={styles.Container}>
      <View style={{ alignItems: 'center', marginVertical: '5%' }}>
        <Text style={styles.welcome}>Registared Cars</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {/* <FlatList
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
        /> */}

        {
          //console.log('cc', cars)
          Object.keys(cars).map(item => (
            <TouchableOpacity

              onPress={() => {

                console.log('id', item.ID)
                //navigation.navigate('CarCruds');
              }}
              style={styles.itemContainer}>
              <View style={{ alignItems: 'center', }}>
                <Text style={{ color: '#000' }}>
                  {item.category}
                </Text>
                <Text style={{ fontSize: hp('1.9%'), color: '#000000' }}>
                  {item.reg_no}
                </Text>
              </View>
            </TouchableOpacity>
          ))

        }
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
