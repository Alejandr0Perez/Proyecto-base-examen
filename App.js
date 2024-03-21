import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const materiasCarrera1 = [
  'Matemáticas',
  'Física',
  'Química',
  'Biología',
  'Historia',
];

const materiasCarrera2 = [
  'Programación',
  'Redes',
  'Seguridad',
  'Base de datos',
  'Inteligencia artificial',
];

const MateriasScreen = ({ route }) => {
  const { carrera } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  const materias = carrera === 1 ? materiasCarrera1 : materiasCarrera2;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Lista de materias</Text>
      <FlatList
        data={materias}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Carrera1"
          component={MateriasScreen}
          initialParams={{ carrera: 1 }}
          options={{ title: 'Carrera 1' }}
        />
        <Stack.Screen
          name="Carrera2"
          component={MateriasScreen}
          initialParams={{ carrera: 2 }}
          options={{ title: 'Carrera 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: '#f9c242',
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;
