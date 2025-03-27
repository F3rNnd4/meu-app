import { View, Text, Button, StyleSheet } from 'react-native';
import { Link, Stack, useNavigation } from 'expo-router';

export default function Home() {
  const navigation = useNavigation();

  const handShowHearder = () => {
    navigation.setOptions({
      headerShown: true,
    });
  }

  const handHideHearder = () => {
    navigation.setOptions({
      headerShown: false,
    });
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        title: 'SENAI',

        headerRight: () => (
          <Button onPress={() => alert('Olá, Bem-vindo à aula de Mobile!')} title='Info' color={'#400C0F'}/>
        ),
        
        headerStyle: {
          backgroundColor: '#950004',
        },
        headerTintColor: '#fff',
        }}/>

      <Text style={styles.title}>Bem-vindo à tela inicial!</Text>
      <Link style={styles.text} href="/about">Ir para Sobre</Link>
      <Button color={'#950004'} title="Mostrar Header" onPress={handShowHearder} ></Button>
      <Button color={'#950004'} title="Ocultar Header" onPress={handHideHearder} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    text: {
        color: '#950004',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },

});