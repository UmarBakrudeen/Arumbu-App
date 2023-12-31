/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import {PRODUCTS} from '../constants';

const CategoryScreen = ({route}) => {
  const window = useWindowDimensions();

  const {selectedCategory} = route.params;

  const filteredProducts = PRODUCTS.filter(
    product => product.category === selectedCategory,
  );

  const CARD_SIZE = (window.width - 20 - 10) / 2;

  const renderItem = ({item}) => (
    <View style={[styles.productCard, {width: CARD_SIZE}]} onPress={() => {}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={item.Img}
          style={{
            width: CARD_SIZE - 20,
            height: CARD_SIZE - 20,
            borderRadius: 5,
          }}
        />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.row}>
        <Text style={styles.qty}>{item.Qty}</Text>
        <Text style={styles.price}>Rs. {item.pricePerKg}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        numColumns={2}
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
    marginVertical: 5,
    padding: 5,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productCard: {
    paddingVertical: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 4,
  },
  productName: {
    fontFamily: 'Lato-Bold',
    color: '#005600',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    height: 45,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  qty: {
    fontFamily: 'Lato-Regular',
    color: '#005600',
    fontSize: 11,
    marginVertical: 2,
  },
  price: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
    color: '#005600',
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
