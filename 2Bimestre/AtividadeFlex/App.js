import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.linha}>
          <View style={styles.coluna}>
            <Text>Seu saldo</Text>
          </View>
        </View>
        <View style={styles.linha}>
          <View style={styles.colunaDois}>
            <Text>Seu saldo</Text>
          </View>
          <View style={styles.colunaDois}>
            <Text>Seu saldo</Text>
          </View>
          <View style={styles.colunaDois}>
            <Text>Seu saldo</Text>
          </View>
        </View>
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
  header:{
    backgroundColor: 'blue',
    margin: 0,
    padding: 0,
    width: '100%',
    height: 300,
    alignItems: 'center',
    borderRadius: 20,
  },
  linha:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300,
    height: 80,
    marginTop: 20,
    borderRadius: 10,

  },
  coluna:{
    height: 30,
    width: 50,
    flexDirection: 'column'
  },
  colunaDois:{
    backgroundColor: 'pink',
    height: 30,
    width: 90,
    flexDirection: 'column'
  },
});

