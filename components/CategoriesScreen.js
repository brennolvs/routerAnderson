import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import data from '../db.json';

const CategoriasScreen = ({ navigation }) => {
  const categorias = data.categorias;

  const selecionaCategoria = (categoria) => {
    navigation.navigate('Produtos', { categoria });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>O Que Deseja Para Hoje?</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoriaItem}
            onPress={() => selecionaCategoria(item)}
          >
            <Text style={styles.categoriaText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoriaItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  categoriaText: {
    fontSize: 16,
  },
});

export default CategoriasScreen;