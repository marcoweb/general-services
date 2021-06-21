import React from 'react';
import { Text, View } from 'react-native';

export default function Inicial({route, navigation}) {
    const {userData} = route.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Início : {userData.nome}</Text>
      </View>
    );
  }