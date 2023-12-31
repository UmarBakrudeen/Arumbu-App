/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Pressable,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {PRODUCTS} from '../constants';
import ListProducts from '../components/ListProducts';
import {useSelector} from 'react-redux';

const ProductScreen = () => {
  const navigation = useNavigation();

  const cart = useSelector(state => state.cart.cart);
  const total = cart
    .map(item => item.quantity * item.pricePerKg)
    .reduce((curr, prev) => curr + prev, 0);

  return (
    <SafeAreaView>
      <FlatList
        data={PRODUCTS}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListProducts item={item} />}
      />
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: '#005600',
            padding: 10,
            marginBottom: 30,
            margin: 15,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Lato-Regular',
                color: 'white',
                marginBottom: 3,
              }}>
              {cart.length} item
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Lato-Bold',
                color: 'white',
              }}>
              ₹ {total}
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Lato-Bold',
                color: 'white',
              }}>
              View Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default ProductScreen;
