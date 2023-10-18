import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';

import data from '../db.json';

const ProdutosScreen = ({ route }) => {
  const { categoria } = route.params;
  const produtos = data.produtos.filter((produto) => produto.categoria_id === categoria.id);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produtos da categoria: {categoria.nome}</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ImageBackground source={{ uri: item.image }} style={styles.image} />
            <View style={styles.produtoItem}>

              <Text style={styles.produtoNome}>{item.nome}</Text>
              <Text style={styles.produtoDescricao}>Descrição: {item.descricao}</Text>
              <Text style={styles.produtoPreco}>Preço: R$ {item.preco.toFixed(2)}</Text>
            </View>
          </View>
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
  produtoItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  produtoNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  produtoDescricao: {
    fontSize: 14,
  },
  produtoPreco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  image: {
    width: '100%',
    height: 200
  }
});

export default ProdutosScreen;
