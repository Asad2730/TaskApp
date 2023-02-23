import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './app/src/screens/Splash/Splash';
import SignIn from './app/src/screens/SignIn/SignIn';
import SignUp from './app/src/screens/SignUp/SignUp';
import Dashboard from './app/src/screens/Dashboard/Dashboard';
import CarCruds from './app/src/screens/CarCruds/CarCruds';
import {Provider} from 'react-redux';
import {Store} from './app/src/redux/Store';


const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CarCruds"
            component={CarCruds}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
