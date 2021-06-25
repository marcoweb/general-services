import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

function Apresentacao({navigation}){
    const Login = () => {
        navigation.navigate('Login')
    }
    return(
        <View style={styles.container}>
            <View style={styles.borda}>
                <Image  style={styles.img} source={require('../../Images/splash.png')}/>

                <TouchableOpacity onPress={Login} style={styles.botaoLogin}>
                    <Text style={styles.txtbtlogin}>Navegar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Apresentacao;