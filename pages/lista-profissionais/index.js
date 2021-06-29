import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from '../lista-profissionais/styles';

import firebase from '../../firebase'

export default function ListaProfissionais({route, navigation}) {
    const {profissao} = route.params 

    const db = firebase.firestore()

    const [profissionais, setProfissionais] = useState([])

    useEffect(() =>{
        const fetchData = async() => {
            try {
                let result = []
                const response = await db.collection("usuarios").where('profissao', '==', profissao).get().then((querySnapshot) => {
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
                        <Text style={Styles.txt}>{p.nome} : {p.telefone}</Text>
                    ))}
                </View>
        </View>
    );
}