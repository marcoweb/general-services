import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Styles from './styles';

export default function Profissional({route, navigation}) {
    const {userData} = route.params
    return (
      <View style={Styles.container}> 
      <View style={Styles.borda1}>
      <View style={Styles.borda2}/>
            <br/><br/><br/>
           <Image style={Styles.img} source={require('../../Images/perfil.png')}/> 

        <Text style={Styles.txt}>{userData.nome}</Text> <br/> 
        <Text style={Styles.txt}>{userData.telefone}</Text> <br/>
    <Text style={Styles.txt}> {userData.profissao}</Text><br/>
       


        </View>
      </View>
    );
  }