
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import telaInicial from './telas/telaInicial';
import telaCompromissosDia from './telas/telaCompromissosDia';
import telaCompromissosSemana from './telas/telaCompromissosSemana';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={telaInicial} options={{ title: 'Início' }} />
        <Stack.Screen name="Dia" component={telaCompromissosDia} options={{ title: 'Compromissos do dia' }} />
        <Stack.Screen name="Semana" component={telaCompromissosSemana} options={{ title: 'Compromissos da semana' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
