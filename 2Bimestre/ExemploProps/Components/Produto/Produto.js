import {Text, View } from 'react-native';
import Style from './Style';

export default function Produto(props) {
    return (
      <View style={Style.container}>
        <Text > Produto: {props.nome} </Text>

        <Text> Valor: {props.valor} </Text>

        <Text> Data do Cadastro: {props.dataCadastro} </Text>
        
      </View>
    );
  }