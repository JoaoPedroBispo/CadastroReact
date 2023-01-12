import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Style from './style';
import {Navegar} from './functtion';
import {useNavigation} from '@react-navigation/native';

export default function Cadastro() {
  const Navigation = useNavigation(Navigation);
  return (
    <View style={Style.container}>
      <ScrollView style={Style.header}>
        <Text style={Style.text}>Nome</Text>
        <TextInput style={Style.input} />

        <Text style={Style.text}>Idade</Text>
        <TextInput keyboardType={'number-pad'} style={Style.input} />

        <Text style={Style.text}>Cpf</Text>
        <TextInput keyboardType={'number-pad'} style={Style.input} />

        <View style={Style.button2}>
          <TouchableOpacity
            style={Style.button}
            onPress={() => Navegar(Navigation)}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
