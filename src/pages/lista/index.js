import React from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, FlatList, Image} from 'react-native';
import Style from './style';

export default function Lista() {
  const route = useRoute();
  return (
    <View style={Style.container}>
      <FlatList
        data={[
          {
            nome: 'João Pedro',
            idade: '17',
            cpf: '111111111/11',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Mariana',
            idade: '17',
            cpf: '222222222/22',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Gabi',
            idade: '17',
            cpf: '333333333/33',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Duda',
            idade: '17',
            cpf: '444444444/44',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Leo',
            idade: '21',
            cpf: '555555555/55',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Joel',
            idade: '31',
            cpf: '666666666/66',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'John',
            idade: '18',
            cpf: '777777777/77',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Jillian',
            idade: '26',
            cpf: '888888888/88',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Jimmy',
            idade: '41',
            cpf: '999999999/99',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Julie',
            idade: '16',
            cpf: '000000000/00',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Marcos',
            idade: '24',
            cpf: '121212121/12',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Gustavo',
            idade: '19',
            cpf: '131313131/13',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Richard',
            idade: '16',
            cpf: '141414141/14',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
          {
            nome: 'Yuri',
            idade: '17',
            cpf: '15151151/15',
            imagem: 'https://cdn-icons-png.flaticon.com/512/711/711769.png',
          },
        ]}
        renderItem={({item}) => (
          <View style={Style.item}>
            <Image style={Style.imagem} source={{uri: item.imagem}} />
            <View>
              <Text style={Style.text}>Nome: {route.params.nome}</Text>
              <Text style={Style.text}>Idade: {route.params.idade}</Text>
              <Text style={Style.text}>CPF: {route.params.cpf}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
