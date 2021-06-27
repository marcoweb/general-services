import React from 'react';
import { Text, View } from 'react-native';

export default function Profissional({route, navigation}) {
    const {userData} = route.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Olá, tudo bem {userData.nome}</Text>
      </View>
    );
  }