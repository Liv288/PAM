import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <View style={styles.linha}>
          <View style={styles.coluna}>
            <Text style={styles.info}>lorem ipsum dolot</Text>
            <Text style={styles.valor}>$236,678.25</Text>
          </View>
        </View>

        <View style={styles.linha2}>
          <View style={styles.colunaDois}>
            <Image source={require('./assets/search.png')}></Image>
          </View>
          <View style={styles.colunaDois}>
            <Image source={require('./assets/graphic.png')}></Image>
          </View>
          <View style={styles.colunaDois}>
            <Image source={require('./assets/configuration.png')}></Image>
          </View>
        </View>

        <View style={styles.linha3}>
          <View style={styles.coluna3}>
            <Text style={styles.textoColuna}>Lorem</Text>
          </View>
          <View style={styles.coluna3}>
            <Text style={styles.textoColuna}>Ipsum</Text>
          </View>
          <View style={styles.coluna3}>
            <Text style={styles.textoColuna}>Dolot</Text>
          </View>
        </View>
      </View>



      {/* Seção Cofrinho / Investido */}
      <View style={styles.section}>
        <View style={styles.card}>
          <View style={styles.linhaTexto}>
            <View style={[styles.bolinha, { backgroundColor: 'red' }]} />
            <Text style={styles.label}>INCOMES</Text>
          </View>
          <Text style={styles.Text}>$267</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.card}>
          <View style={styles.linhaTexto}>
            <View style={styles.bolinha} />
            <Text style={styles.label}>EXPENSES</Text>
          </View>
          <Text style={styles.Text2}>$255</Text>
        </View>
      </View>

      <View>
        <Text style={styles.final}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  header: {
    backgroundColor: 'red',
    margin: 0,
    padding: 0,
    width: '100%',
    height: 300,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  linha: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 115,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },

  linha2: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 300,
    height: 80,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },

  coluna: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    fontSize: 18,
    color: '#3c3c3c',
    marginBottom: 5,
  },

  valor: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  colunaDois: {
    backgroundColor: 'white',
    height: 30,
    width: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  linha3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    height: 20,
    marginTop: -10,
  },

  coluna3:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoColuna:{
    color: 'white',
    fontSize: 16,
    padding: 'auto',
  },

  // COFRINHO / INVESTIDO
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  card: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },

  linhaTexto: {
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

  label: {
    fontSize: 23,
  },

  divisor: {
    marginTop: 5,
    width: 1,
    height: 100,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },

  Text: {
    fontSize: 44,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5,
  },

  Text2: {
    fontSize: 44,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 5,
  },

  final: {
    marginTop: 45,
    color: '#3c3c3c',
    textAlign: 'center',
  },
});
