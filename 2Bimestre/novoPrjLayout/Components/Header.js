import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

      <View style={styles.header}>
        <View style={styles.conteudo}>
          <View style={styles.linhaImg}>
            <View style={styles.colunaImg}>
              <TouchableOpacity>
                <Image source={require("./assets/conf.png")}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.linha}>
            <View style={styles.coluna}>
              <Text style={styles.info}>lorem ipsum dolot</Text>
              <Text style={styles.valor}>$236,678.25</Text>
            </View>
          </View>
        </View>

        <View style={styles.linha2}>
          <View style={styles.colunaDois}>
            <TouchableOpacity>
              <Image source={require("./assets/search.png")}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.colunaDois}>
            <TouchableOpacity>
              <Image source={require("./assets/graphic.png")}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.colunaDois}>
            <TouchableOpacity>
              <Image source={require("./assets/configuration.png")}></Image>
            </TouchableOpacity>
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
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
      },
    
      linhaImg: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 300,
        height: 10,
        marginTop: 20,
        zIndex: 1,
      },
    
      conteudo:{
        backgroundColor: 'white',
        width: 300,
        height: 115,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
      },
    
      linha2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 300,
        height: 80,
        marginTop: 30,
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
        height: 72,
        width: 90,
        borderRadius: 5,
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
});
