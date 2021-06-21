import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login'
import Inicial from './pages/inicial'
import UserForm from './pages/user-form'
import firebase from './firebase';

export default function App() {
  const db = firebase.firestore()
  const Stack = createStackNavigator()

  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)

  async function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    if(result){
      setUser(result.user)
      db.collection('usuarios').where('uid', '==', result.user.uid).get().then((querySnapshot) => {
        if(querySnapshot.size == 1)
          setUserData(querySnapshot[0].data())
        return userData
      })
    }
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} initialParams={{googleLoginHandler : loginGoogle}} />
          <Stack.Screen name="Inicial" component={Inicial}/>
          <Stack.Screen name="UserForm" component={UserForm} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

