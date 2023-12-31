import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import EmptyCart from '../assets/images/emptyCart.png';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noOrdersText}>No orders available.</Text>
      <Image source={EmptyCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  noOrdersText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005600',
  },
});

export default FavoriteScreen;
