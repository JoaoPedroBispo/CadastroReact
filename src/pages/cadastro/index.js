import React, {useState} from 'react';
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
  const Navigation = useNavigation();
  const [Nome, setNome] = useState('');
  const [Idade, setIdade] = useState('');
  const [Cpf, setCpf] = useState('');

  const Cadastrar = () => {
    Navigation.navigate('Cadastrados', {Nome: Nome, Idade: Idade, Cpf: Cpf});
  };

  return (
    <View style={Style.container}>
      <ScrollView style={Style.header}>
        <Text style={Style.text}>Nome</Text>
        <TextInput
          style={Style.input}
          value={Nome}
          onChangeText={text => setNome(text)}
        />

        <Text style={Style.text}>Idade</Text>
        <TextInput
          maxLength={3}
          keyboardType={'number-pad'}
          style={Style.input}
          value={Idade}
          onChangeText={text => setIdade(text)}
        />

        <Text style={Style.text}>Cpf</Text>
        <TextInput
          maxLength={11}
          keyboardType={'number-pad'}
          style={Style.input}
          value={Cpf}
          onChangeText={text => setCpf(text)}
        />

        <View>
          <TouchableOpacity
            title="Cadastrar"
            style={Style.button}
            onPress={Cadastrar}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
