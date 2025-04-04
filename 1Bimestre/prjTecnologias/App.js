import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [nota1, setNota1] = useState()
  const [nota2, setNota2] = useState()
  const [nota3, setNota3] = useState()
  const [nota4, setNota4] = useState()
  const [result, setResult] = useState()
  const [status, setStatus] = useState()

  const media = ()=>{
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4) ) {
      if(nota1<=10 && nota2<=10 && nota3<=10 && nota4<=10){
        const r = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4))/4
  
        if(r<6){
          setStatus('Reprovado')
          setResult(r);
        }else{
          setStatus('Aprovado')
          setResult(r);
        }
      }else{
        setResult('Erro')
        setStatus('Digite somente números menores que 10.')
      }
      setResult(r);
    } else {
      setResult('Erro')
      setStatus('Por favor, insira somente números.');
    }
    
  }
    

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Text style={styles.title}>Média do Aluno</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.box}>
          <Text style={styles.subtitle}>Primeira Nota: </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite aqui..'
            autoFocus={true}
            keyboardType={'numeric'}
            onChangeText={text =>setNota1(text)}
          /> 
        </View>
        <View style={styles.box}>
          <Text style={styles.subtitle}>Segunda Nota: </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite aqui..'
            keyboardType={'numeric'}
            onChangeText={text =>setNota2(text)}
          /> 
        </View>
        <View style={styles.box}>
          <Text style={styles.subtitle}>Terceira Nota: </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite aqui..'
            keyboardType={'numeric'}
            onChangeText={text =>setNota3(text)}
          /> 
        </View>
        <View style={styles.box}>
          <Text style={styles.subtitle}>Quarta Nota: </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite aqui..'
            keyboardType={'numeric'}
            onChangeText={text =>setNota4(text)}
          /> 
        </View>

        <View style={styles.botao}>
          <Button 
            title='Calcular a média'
            onPress={()=>media()}
          />
        </View>

        <View style={styles.boxResposta}>
          <Text style={styles.resultado}>Sua média é:  {result}</Text>
          <Text style={styles.resultado}>Você foi:  {status}</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    marginTop: 0,
    marginBottom: 50,
    fontSize: 50,
    fontFamily: 'sanserif',
    color: 'rgb(255, 90, 167)'
  },

  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form:{ 

    width: 500,
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,  
    borderColor: 'rgb(254, 181, 215)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  box:{
    margin: 6
  },

  input:{
    width: 440,
    height: 30,
    borderWidth: 2,
    borderColor: 'rgb(250, 135, 188)',
    borderRadius: 5,
    backgroundColor: 'rgb(241, 241, 241)'
  },

  subtitle:{
    fontSize: 25,
    fontFamily: 'sanserif',
    color: 'rgb(255, 90, 167)'
  },
  
  botao:{
    marginTop: 10,
    backgroundColor: 'pink'
  },

  resultado:{
    marginTop: 15,
    fontFamily: 'sanserif',
    fontSize: 20,
    color: 'rgb(255, 90, 167)'
  }
});
