import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../Cuidadores/style';

import firebase from '../../firebase'

export default function Cuidadores({route, navigation}) {
    // const {userData} = route.params 

    const db = firebase.firestore()

    const [profissionais, setProfissionais] = useState([])

    useEffect(() =>{
        const fetchData = async() => {
            try {
                let result = []
                const response = await db.collection("usuarios").where('profissao', '==', 'Cuidador(a)').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        result.push(doc.data())
                    })
                })
                setProfissionais(result)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
         <View style={Styles.container}> 
             <View style={Styles.borda1}>
                <View style={Styles.borda2}/>
                    {profissionais.map((p) => (
                        <Text>{p.nome}</Text>
                    ))}
                </View>
        </View>
    );
}