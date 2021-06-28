import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../Cuidadores/style';

export default function Cuidadores({route, navigation}) {
    // const {userData} = route.params 

    return (
         <View style={Styles.container}> 
             <View style={Styles.borda1}>
                <View style={Styles.borda2}/>

                    <Text>Olá Mundo</Text>

                </View>
        </View>
    );
}