import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Styles from './styles'
import firebase from '../../firebase';

const db = firebase.firestore()

export default function UserForm({route, navigation}) {
    const {user, userData} = route.params

    const [nome, onChangeNome] = useState(user.displayName)
    const [idade, onChangeIdade] = useState('')
    const [endereco, onChangeEndereco] = useState('')
    const [telefone, onChangeTelefone] = useState('')
    const [email, onChangeEmail] = useState('')
    //const [senha, onChangeSenha] = useState('')
    const [profissao, setSelectedProfissao] = useState('')

    const profissaoOptions = [
        '',
        'Cuidador(a)',
        'Faxineiro(a)',
        'Manicure',
        'Pedreiro(a)',
        'Pintor(a)'
    ]

    const handleSave = () => {
        const newUserData = {
            'nome' : nome,
            'endereco' : endereco,
            'idade' : idade,
            'telefone' : telefone,
            'email' : email,
            'profissao' : profissao,
            'uid' : user.uid
        }
        db.collection('usuarios').add(newUserData)
        navigation.navigate('Inicial', {userData : newUserData})
    }

    return (
      <View style={Styles.container}>
          <View style={Styles.formArea}>
            <TextInput style={Styles.formInput} value={nome} onChangeText={onChangeNome} placeholder='Nome' />
            <TextInput style={Styles.formInput} value={idade} onChangeText={onChangeIdade} placeholder='Idade' />
            <TextInput style={Styles.formInput} value={endereco} onChangeText={onChangeEndereco} placeholder='Endereço' />
            <TextInput style={Styles.formInput} value={telefone} onChangeText={onChangeTelefone} placeholder='Telefone' />
            <TextInput style={Styles.formInput} value={email} onChangeText={onChangeEmail} placeholder='E-Mail' />
            <Picker style={Styles.formInput} selectedValue={profissao} onValueChange={(itemValue, itemIndex) => setSelectedProfissao(itemValue)}>
                {profissaoOptions.map((p) => (
                    <Picker.Item key={p} value={p} label={p} /> 
                ))}
            </Picker>
            <Button title="Salvar" onPress={handleSave} />
        </View>
      </View>
    )
  }
  