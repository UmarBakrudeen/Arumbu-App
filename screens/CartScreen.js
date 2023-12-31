/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {decrementQty, incrementQty} from '../ProductReducer';
import {decrementQuantity, incrementQuantity} from '../CartReducer';
import EmptyCart from '../assets/images/emptyCart.png';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const total = cart
    .map(item => item.quantity * item.pricePerKg)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={{flex: 1}}>
        {total === 0 ? (
          <View style={styles.emptyCartContainer}>
            <Image source={EmptyCart} style={styles.image} />
            <Text style={styles.noOrdersText}>Empty Cart</Text>
            <Text style={styles.para}>
              Look like you haven't added any item yet.
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.container}>
              {cart.map((item, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 7,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  key={index}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {item.Img && item.Img.uri ? (
                      <View
                        style={{
                          borderRadius: 12,
                          borderColor: '#e0e0e0',
                          width: 60,
                          height: 60,
                          borderWidth: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={item.Img}
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: 10,
                          }}
                        />
                      </View>
                    ) : null}
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingLeft: 5,
                        alignItems: 'center',
                      }}>
                      <View>
                        <Image
                          source={item.Img}
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: 10,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          paddingLeft: 10,
                        }}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.Qty}>{item.Qty}</Text>
                        <Text style={styles.price}>Rs. {item.pricePerKg}</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      backgroundColor: '#005600',
                      borderRadius: 10,
                    }}>
                    {/* <Image
                      source={item.Img}
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 10,
                      }}
                    /> */}
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                        dispatch(decrementQty(item));
                      }}>
                      <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(incrementQuantity(item));
                        dispatch(incrementQty(item));
                      }}>
                      <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
            <View
              style={[
                styles.container,
                {
                  padding: 10,
                },
              ]}>
              <Text style={styles.header}>Bill Details</Text>
              <View style={styles.detailContainer}>
                <Text style={styles.detailText}>item total (incl.taxes)</Text>
                <Text style={styles.detailText}>₹ {total}</Text>
              </View>
              <View style={styles.detailContainer}>
                <Text style={styles.detailText}>Delivery Charges</Text>
                <Text style={styles.detailText}>₹ 30</Text>
              </View>
              <View style={styles.detailContainer}>
                <Text style={styles.total}>Grand Total</Text>
                <Text style={styles.total}>₹ {total + 30}</Text>
              </View>
            </View>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Payment')}>
              <Text style={styles.button}>PROCEED</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f800',
  },
  animation: {
    width: 200,
    height: 200,
  },
  emptyCartText: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: '#005600',
    margin: 20,
  },
  productName: {
    fontFamily: 'Lato-Bold',
    fontSize: 13.5,
    color: '#005600',
  },
  price: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#005600',
    paddingVertical: 4,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    paddingHorizontal: 6,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    flex: 1,
  },
  header: {
    fontFamily: 'Lato-Bold',
    color: '#005600',
    fontSize: 15,
    marginBottom: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    marginBottom: 5,
  },
  total: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    marginBottom: 5,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#005600',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  button: {
    color: 'white',
    fontFamily: 'Lato-Bold',
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  noOrdersText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  para: {
    fontSize: 15,
    color: 'black',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#005600',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
});
