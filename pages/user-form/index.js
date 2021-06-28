import React, { useState } from 'react';
import { Text, View, TextInput, Button,TouchableOpacity, CheckBox } from 'react-native';
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
    const [cadastroProfissional, setCadastroProfissional] = useState(false)
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
            'cadastroProfissional': cadastroProfissional,
            'profissao' : profissao,
            'uid' : user.uid
        }
        db.collection('usuarios').add(newUserData) 
        // if(setCadastroProfissional != cadastroProfissional) {
       navigation.navigate('Inicial', {userData : newUserData}) 
    // } else {
    //     navigation.navigate('Inicial', {userData : newUserData})
    // } }
    }
    

    return (
      <View style={Styles.container}>
          
               <View style={Styles.borda}>   
            <View style={Styles.borda2}/>   
             <Text style={Styles.titulo}> Preencha seus dados:</Text>   

                <View style={Styles.formArea}>
                <View style={Styles.formulario}>
            
            <TextInput style={Styles.formInput} value={nome} onChangeText={onChangeNome} placeholder='Nome' />
            <TextInput style={Styles.formInput} value={idade} onChangeText={onChangeIdade} placeholder='Idade' />
            <TextInput style={Styles.formInput} value={endereco} onChangeText={onChangeEndereco} placeholder='Endereço' />
            <TextInput style={Styles.formInput} value={telefone} onChangeText={onChangeTelefone} placeholder='Telefone' />
            <TextInput style={Styles.formInput} value={email} onChangeText={onChangeEmail} placeholder='E-Mail' />
           
           <Text style={Styles.txtOpcao}>
               Caso você tenha interesse em oferecer um serviço,
                clique na caixinha abaixo:</Text> 
           
            <CheckBox style={Styles.formInput} value={cadastroProfissional} onValueChange={setCadastroProfissional} />
            <Picker enabled={cadastroProfissional} style={Styles.formInput} selectedValue={profissao} onValueChange={(itemValue, itemIndex) => setSelectedProfissao(itemValue)}>
                {profissaoOptions.map((p) => (
                    <Picker.Item key={p} value={p} label={p} /> 
                ))}
            </Picker>
         
           </View>
            </View>
                {/* <Button style={Styles.botaoEnviar} title="Salvar" onPress={handleSave} /> */}
                <TouchableOpacity style={Styles.botaoEnviar} title="Salvar" onPress={handleSave}>
                   <Text style={Styles.txtbt}>Salvar </Text>
                </TouchableOpacity>
        </View>
      </View>
    )
  }
  