import { View, Text, Button, StyleSheet } from 'react-native';
import { Link, Stack, useNavigation } from 'expo-router';

export default function Sobre() {
  const navigation = useNavigation();
  
    const handShowHearder = () => {
      navigation.setOptions({
        headerShown: true,
      });
    };
  
    const handHideHearder = () => {
      navigation.setOptions({
        headerShown: false,
      });
    };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
      title: 'Sobre',
      headerStyle: {
        backgroundColor: '#3b5998',
      },
      headerTintColor: '#fff',
      }}/>

      <Text style={styles.title}>Esta é a tela Sobre!</Text>
      <Link style={styles.text} href="/">Ir para o Início</Link>
      <Button color={'#3b5998'} title="Mostrar Header" onPress={handShowHearder} ></Button>
      <Button color={'#3b5998'} title="Ocultar Header" onPress={handHideHearder} ></Button>
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
      color: '#3b5998',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 5
  }
});