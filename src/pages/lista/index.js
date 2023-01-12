import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Style from './style';

export default function Lista() {
  return (
    <View style={Style.container}>
      <FlatList
        data={[
          {key: 'Nome: João Pedro', idade: '17', cpf: '677857575757'},
          {key: 'Nome: Mariana'},
          {key: 'Nome: Gabi'},
          {key: 'Nome: Duda'},
          {key: 'Nome: Leo'},
          {key: 'Nome: Joel'},
          {key: 'Nome: John'},
          {key: 'Nome: Jillian'},
          {key: 'Nome: Jimmy'},
          {key: 'Nome: Julie'},
        ]}
        renderItem={({item}) => (
          <View style={Style.item}>
            <Text>{item.key}</Text>
            <Text>{item.idade}</Text>
            <Text>{item.cpf}</Text>
          </View>
        )}
      />
    </View>
  );
}
