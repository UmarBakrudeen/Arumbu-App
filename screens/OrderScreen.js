// OrderScreen.js
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import EmptyCart from '../assets/images/emptyCart.png';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={EmptyCart} />
      <Text style={styles.noOrdersText}>No orders available.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f800',
  },
  noOrdersText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005600',
  },
});

export default OrderScreen;
