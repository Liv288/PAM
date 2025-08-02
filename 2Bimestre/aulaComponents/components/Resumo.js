import { View, Text, StyleSheet } from 'react-native';

export default function Resumo() {
  return (
    <View style={estilos.sessao}>
      <View style={estilos.cartao}>
        <View style={estilos.linha}>
          <View style={[estilos.bolinha, { backgroundColor: 'red' }]} />
          <Text style={estilos.rotulo}>RECEITAS</Text>
        </View>
        <Text style={estilos.valor}>$267</Text>
      </View>

      <View style={estilos.divisor} />

      <View style={estilos.cartao}>
        <View style={estilos.linha}>
          <View style={estilos.bolinha} />
          <Text style={estilos.rotulo}>DESPESAS</Text>
        </View>
        <Text style={estilos.valor2}>$255</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  sessao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  cartao: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  bolinha: {
    width: 15,
    height: 15,
    backgroundColor: 'black',
    borderRadius: 11,
    marginRight: 6,
  },
  rotulo: {
    fontSize: 23,
  },
  divisor: {
    marginTop: 5,
    width: 1,
    height: 100,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  valor: {
    fontSize: 44,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },
  valor2: {
    fontSize: 44,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
  },
});
