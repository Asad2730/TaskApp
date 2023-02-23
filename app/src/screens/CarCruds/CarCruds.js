import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCars } from '../../redux/Actions';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
// import { uuid } from 'uuidv4';
import uuid from 'react-uuid';

export default function CarCruds() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState();
  const [checkcategory, setCheckcategory] = useState(false);
  const [categoryerror, setcategoryerror] = useState('');
  const [Color, setColor] = useState('');
  const [checkcolor, setCheckcolor] = useState(false);
  const [colorerror, setcolorerror] = useState('');
  const [Modal, setModal] = useState('');
  const [checkmodal, setCheckmodal] = useState(false);
  const [modalerror, setmodalerror] = useState('');
  const [Regno, setRegno] = useState('');
  const [checkregno, setCheckregno] = useState(false);
  const [regnoerror, setregnoerror] = useState('');


  const [obj, setObj] = useState([]);
  //const { cars, carID } = useSelector(state => state.taskReducer);
  //const dispatch = useDispatch();




  // const getCars = async () => {

  //   // const Car = cars.find(car => car.ID === carID)
  //   const Car = await AsyncStorage.getItem('Cars')
  //   if (Car) {
  //     setSelectedCategory(Car.category);
  //     setColor(Car.color);
  //     setModal(Car.modal);
  //     setRegno(Car.reg_no)
  //   }

  // }

  useEffect(() => {

    // getCars();

  }, [])


  const AddCar = async () => {
    console.log(uuid())
    if (selectedCategory == '') {
      setCheckcategory(true);
      setcategoryerror('Select Category');
      return false;
    }
    if (Color == '') {
      setCheckcolor(true);
      setcolorerror('Enter Color');
      return false;
    }
    if (Modal == '') {
      setCheckmodal(true);
      setmodalerror('Enter Modal');
      return false;
    }
    if (Regno == '') {
      setCheckregno(true);
      setRegno('Enter Registation number');
      return false;
    } else {
      try {
        var Car = {
          ID: uuid(),
          Category: selectedCategory,
          color: Color,
          modal: Modal,
          reg_no: Regno,
        };
        console.log('CAr', Car)

        let data = await AsyncStorage.getItem('Cars')
        console.log('d', data)
        if (data !== null) {
          console.log('dd', data)

          setObj(p => [...p, Car])
          AsyncStorage.setItem('Cars', JSON.stringify(obj))
            .then(() => {
              console.log('new', Car)
              Alert.alert('Success', 'Car Added successfully');
              navigation.goBack();
            })
            .catch(err => console.log(err));

        } else {
          console.log('CAr1', Car)
          AsyncStorage.setItem('Cars', JSON.stringify(Car))
            .then(() => {
              console.log('new', Car)
              Alert.alert('Success', 'Car Added successfully');
              navigation.goBack();
            })
            .catch(err => console.log(err));
        }
        // console.log('CAr1', Car)

        // console.log('hh', obj)
        // AsyncStorage.setItem('Cars', JSON.stringify(obj))
        //   .then(() => {
        //     console.log('new', obj)
        //     Alert.alert('Success', 'Car Added successfully');
        //     navigation.goBack();
        //   })
        //   .catch(err => console.log(err));


      } catch (error) {
        console.log(error);
      }
    }
  };

  // const AddCar = async () => {
  //   if (selectedCategory == '') {
  //     setCheckcategory(true);
  //     setcategoryerror('Select Category');
  //     return false;
  //   }
  //   if (Color == '') {
  //     setCheckcolor(true);
  //     setcolorerror('Enter Color');
  //     return false;
  //   }
  //   if (Modal == '') {
  //     setCheckmodal(true);
  //     setmodalerror('Enter Modal');
  //     return false;
  //   }
  //   if (Regno == '') {
  //     setCheckregno(true);
  //     setRegno('Enter Registation number');
  //     return false;
  //   } else {
  //     try {
  //       var Car = {
  //         ID: carID,
  //         Category: selectedCategory,
  //         color: Color,
  //         modal: Modal,
  //         reg_no: Regno,
  //       };
  //       console.log('CAr', Car)

  //       let data = await AsyncStorage.getItem('Cars')
  //       console.log(data)
  //       // const index = Car.findIndex(car => car.ID === carID);
  //       // let newCars = [];
  //       // if (index > -1) {
  //       //   newCars = [...cars];
  //       //   newTasks[index] = Car;
  //       // } else {
  //       //   newTasks = [...cars, Car];
  //       // }

  //       // console.log('hh', newCars)
  //       // AsyncStorage.setItem('Cars', JSON.stringify(Car))
  //       //   .then(() => {
  //       //     console.log('new', newCars)
  //       //     dispatch(setCars(newCars));
  //       //     Alert.alert('Success', 'Car Added successfully');
  //       //     navigation.goBack();
  //       //   })
  //       //   .catch(err => console.log(err));

  //       // AsyncStorage.setItem('Cars', JSON.stringify(newCars))
  //       //   .then(() => {
  //       //     console.log('new', newCars)
  //       //     dispatch(setCars(newCars));
  //       //     Alert.alert('Success', 'Car Added successfully');
  //       //     navigation.goBack();
  //       //   })
  //       //   .catch(err => console.log(err));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <View style={styles.Container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={{ alignItems: 'center', marginVertical: '4%' }}>
          <Text style={styles.welcome}> Add Car</Text>
        </View>
        <View style={{ alignItems: 'center', marginVertical: '5%' }}>
          <Text style={styles.category}> Select Category</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={itemValue => {
              setSelectedCategory(itemValue), setCheckcategory(false);
            }}
            mode={'dropdown'}
            style={{ width: 250 }}>
            <Picker.Item label="Select a Category" value="0" color="#000000" />
            <Picker.Item label="Honda" value="Honda" />
            <Picker.Item label="Toyota" value="Toyota" />
            <Picker.Item label="Suzuki" value="Suzuki" />
            <Picker.Item label="Alto" value="Alto" />
            <Picker.Item label="Hyundai" value="Hyundai" />
          </Picker>
        </View>
        {checkcategory ? (
          <Text style={styles.errortxt}>{categoryerror}</Text>
        ) : null}
        <View style={{ alignItems: 'center' }}>
          <View style={styles.TextInput}>
            <TextInput
              style={styles.TextinputStyle}
              placeholder="Enter Color"
              value={Color}
              onChangeText={text => {
                setColor(text);
                setCheckcolor(false);
              }}
            />
          </View>
        </View>
        {checkcolor ? <Text style={styles.errortxt}>{colorerror}</Text> : null}
        <View style={{ alignItems: 'center' }}>
          <View style={styles.TextInput}>
            <TextInput
              style={styles.TextinputStyle}
              placeholder="Enter Modal"
              value={Modal}
              onChangeText={text => {
                setModal(text);
                setCheckmodal(false);
              }}
            />
          </View>
        </View>
        {checkmodal ? <Text style={styles.errortxt}>{modalerror}</Text> : null}
        <View style={{ alignItems: 'center' }}>
          <View style={styles.TextInput}>
            <TextInput
              style={styles.TextinputStyle}
              placeholder="Enter Registration No"
              value={Regno}
              onChangeText={text => {
                setRegno(text);
                setCheckregno(false);
              }}
            />
          </View>
        </View>
        {checkregno ? <Text style={styles.errortxt}>{regnoerror}</Text> : null}

        <View style={{ alignItems: 'center', marginTop: hp('20%') }}>
          <TouchableOpacity onPress={() => AddCar()} style={styles.button}>
            <Text style={styles.signin}>Add </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
