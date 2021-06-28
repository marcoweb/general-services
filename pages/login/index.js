import React from 'react';
import { Text, View, Button } from 'react-native';
import firebase from '../../firebase';
import Styles from './styles';


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
            //  if(querySnapshot.docs[0].data.cadastroProfissional ){
            navigation.navigate('Inicial', {userData: userData})
            
            //  } else {
            //       navigation.navigate('Inicial', {userData: userData} ) 
            //  }

            } else {
            navigation.navigate('UserForm', {user: result.user, userData: userData})
        }
         
        })
      }
    }

    return (
          <View style={Styles.container}>

                <View style={Styles.borda1}>
                    <View style={Styles.borda2}/>

                     <Text style={Styles.txtBV}>Bem Vindo!</Text>
                  
                        <Text style={Styles.txtCad}>Faça seu cadastro:</Text>


                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button title='Clique aqui' onPress={loginGoogle} />
                    </View>
        
                 <View style={Styles.rodape}/>

                </View>
            
            </View>
    );
  }
  