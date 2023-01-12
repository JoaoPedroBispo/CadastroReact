import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cadastro from '../pages/cadastro';
import Lista from '../pages/lista';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Cadastro} />
      <Stack.Screen name="Cadastrados" component={Lista} />
    </Stack.Navigator>
  );
}
