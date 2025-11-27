import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import telaInicial from './telas/telaInicial';
import telaMeuscompromissos from './telas/telaMeuscompromissos';
import telaCompromissoequipe from './telas/telatelaCompromissoequipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={telaInicial}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="Dia"
          component={telaMeuscompromissos}
          options={{ title: 'Meus compromissos' }}
        />
        <Stack.Screen
          name="Semana"
          component={telaCompromissoequipe}
          options={{ title: 'Compromissos da equipe' }}
        />
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
