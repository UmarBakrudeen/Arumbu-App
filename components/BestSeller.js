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
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {decrementQty, incrementQty} from '../ProductReducer';

import {addToCart, decrementQuantity, incrementQuantity} from '../CartReducer';
import {useDispatch, useSelector} from 'react-redux';

const BestSeller = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };

  const window = useWindowDimensions();
  const CARD_SIZE = (window.width - 2 * 20 - 20 - 10) / 2;

  return (
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
        {cart.some(cart => cart.id === item.id) ? (
          <Pressable
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingVertical: 3,
            }}>
            <Pressable
              style={{
                width: 20,
                height: 20,
                borderRadius: 11,
                borderColor: '#005600',
                borderWidth: 0.5,
                backgroundColor: '#e8f5e9',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                dispatch(decrementQuantity(item));
                dispatch(decrementQty(item));
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#005600',
                  paddingHorizontal: 6,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 15,
                  color: '#005600',
                  paddingHorizontal: 8,
                  fontFamily: 'Lato-Bold',
                }}>
                {item.quantity}
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 20,
                height: 20,
                borderRadius: 11,
                borderColor: '#005600',
                borderWidth: 0.5,
                backgroundColor: '#e8f5e9',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                dispatch(incrementQuantity(item));
                dispatch(incrementQty(item));
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#005600',
                  paddingHorizontal: 6,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                +
              </Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable style={styles.button} onPress={addItemToCart}>
            <Text style={styles.buttonText}>ADD</Text>
          </Pressable>
        )}
      </View>
    </View>
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
