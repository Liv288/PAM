import { StatusBar } from 'expo-status-bar';
import { View,Text } from 'react-native';

{/* importação do componente */}
import Produto from './components/Produto/Produto';
import Style from './components/Produto/Style';
import ListaProduto from './components/ListaProduto/ListaProduto';

export default function App() {

  return (
    <View style={Style.container}>

      <View>
        <Text>Lista de Produtos </Text>
      </View>      

      {/*'utilização do componente*/}      
      <Produto nome="Coca-cola" valor="10.5" dataCadastro="11/05/2025" />
      <Produto nome="Batata frita" valor="8" dataCadastro="15/05/2025"/>

      <ListaProduto />

      <StatusBar style="auto" />
    </View>
  );
}