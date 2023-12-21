import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Pressable,
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
      <View style={styles.priceContainer}>
        <Text style={styles.Qty}>{item.Qty}</Text>
        <Text style={styles.price}>Rs. {item.pricePerKg}</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </Pressable>
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
  button: {
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderWidth: 0.5,
    borderColor: '#004600',
    borderRadius: 5,
    backgroundColor: '#e8f5e9',
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  productName: {
    fontFamily: 'Lato-Bold',
    color: '#005600',
    fontSize: 13,
    marginVertical: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#004600',
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    fontFamily: 'Lato-Regular',
    fontSize: 13,
  },
  Qty: {
    fontFamily: 'Lato-Bold',
    color: '#005600',
    fontSize: 10,
    marginVertical: 2,
  },
});

export default CategoryScreen;
