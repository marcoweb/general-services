import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login'
import Inicial from './pages/inicial'
import UserForm from './pages/user-form'
import Apresentacao from './pages/Apresentacao' 

export default function App() {
  const Stack = createStackNavigator()

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Apresentacao">
            <Stack.Screen name="Apresentacao" component={Apresentacao}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Inicial" component={Inicial}/>
          <Stack.Screen name="UserForm" component={UserForm} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

