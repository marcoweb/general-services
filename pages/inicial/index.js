import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from './styles';

export default function Inicial({route, navigation}) {
    const {userData} = route.params 

    const Cuidadores = () => {
        navigation.navigate('Cuidadores')
    }

    return (
         <View style={Styles.container}> 
      <View style={Styles.borda1}>
      <View style={Styles.borda2}/>

        <Text style={Styles.contrate}>Contrate algum serviço:</Text>

        <TouchableOpacity style={Styles.botao} onPress={Cuidadores}>
           <Text style={Styles.txt}> Cuidadores </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={Styles.botao}>
           <Text style={Styles.txt}> Faxineiros </Text>
        </TouchableOpacity>  
        
        <TouchableOpacity style={Styles.botao}>
           <Text style={Styles.txt}> Manicures </Text>
        </TouchableOpacity> 
        
        <TouchableOpacity style={Styles.botao}>
           <Text style={Styles.txt}> Pedreiros </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={Styles.botao}>
           <Text style={Styles.txt}> Pintores </Text>
        </TouchableOpacity> 
        
        
      </View>
      </View>
      
    );
  }