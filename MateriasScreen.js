import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MateriasScreen = ({ materias }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

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

export default MateriasScreen;
