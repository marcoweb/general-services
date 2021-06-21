import React from 'react';
import { Text, View, Button } from 'react-native';
import firebase from '../../firebase';

export default function Login({route, navigation}) {
    // const {googleLoginHandler} = route.params

    async function loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      const db = firebase.firestore()

      const result = await firebase.auth().signInWithPopup(provider)
      if(result){
        let userData = null
        db.collection('usuarios').where('uid', '==', result.user.uid).get().then((querySnapshot) => {
          if(querySnapshot.size == 1){
            userData = querySnapshot.docs[0].data()
            navigation.navigate('Inicial', {userData: userData})
          } else {
            navigation.navigate('UserForm', {user: result.user, userData: userData})
          }
        })
      }
    }

    return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Login com Google' onPress={loginGoogle} />
          </View>
    );
  }
  