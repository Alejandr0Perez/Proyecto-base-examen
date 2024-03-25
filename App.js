import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MateriasScreen from './components/MateriasScreen';
import MateriasViewModel from './viewmodels/MateriasViewModel';

const Stack = createStackNavigator();
const materiasViewModel = new MateriasViewModel();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Carrera1"
          options={{ title: 'Carrera 1' }}
        >
          {() => <MateriasScreen materias={materiasViewModel.getCarreraMaterias(1)} />}
        </Stack.Screen>
        <Stack.Screen
          name="Carrera2"
          options={{ title: 'Carrera 2' }}
        >
          {() => <MateriasScreen materias={materiasViewModel.getCarreraMaterias(2)} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
