import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {PRODUCTS} from '../constants';

const CategoryScreen = ({route}) => {
  const {selectedCategory} = route.params;
  console.log('Selected Category:', selectedCategory);

  const filteredProducts = PRODUCTS.filter(
    product => product.category === selectedCategory,
  );

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.productCard} onPress={() => {}}>
      <Image source={item.Img} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productId}>ID: {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Category: {selectedCategory}</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  productId: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CategoryScreen;
