import {
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts, incrementQty} from '../ProductReducer';

import {PRODUCTS} from '../constants';
import {addToCart} from '../CartReducer';

const BestSeller = ({item}) => {
  const cart = useSelector(state => state.cart.cart);

  const product = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      PRODUCTS.map(item => dispatch(getProducts(item)));
    };
    fetchProducts();
  }, [dispatch, product.length]);

  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };

  const navigation = useNavigation();
  const window = useWindowDimensions();
  const CARD_SIZE = (window.width - 2 * 20 - 20 - 10) / 2;

  const renderItem = ({item}) => (
    <View
      style={[
        styles.container,
        {
          width: CARD_SIZE,
        },
      ]}>
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
      <Text style={styles.Qty}>{item.Qty}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Rs. {item.pricePerKg}</Text>
        <Pressable style={styles.button} onPress={addItemToCart}>
          <Text style={styles.buttonText}>ADD</Text>
        </Pressable>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Best Seller</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Products')}
          style={{
            paddingHorizontal: 5,
            paddingVertical: 1,
            backgroundColor: '#228b22',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'white',
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={product}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 10,
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
  headerTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderWidth: 0.2,
    borderColor: '#004600',
    borderRadius: 5,
    backgroundColor: '#e8f5e9',
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
    marginLeft: 10,
  },
});
