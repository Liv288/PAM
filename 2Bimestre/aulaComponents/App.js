import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header.js';
import Resumo from './components/Resumo.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Resumo />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
