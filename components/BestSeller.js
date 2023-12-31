import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {incrementQty} from '../ProductReducer';
import {useNavigation} from '@react-navigation/native';
import defaultImage from '../assets/images/basket.png';
import {addToCart} from '../CartReducer';
import {useDispatch, useSelector} from 'react-redux';

const BestSeller = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const cart = useSelector(state => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };

  const handleCardPress = () => {
    navigation.navigate('ProductDetails', {item});
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={item && item.Img ? item.Img : defaultImage}
            style={styles.image}
          />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.row}>
          <Text style={styles.qty}>{item.Qty}</Text>
          <Text style={styles.price}>Rs. {item.pricePerKg}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    width: '93%',
    // margin: 5,
    padding: 10,
    // borderRadius: 10,
    // paddingBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 5,
    resizeMode: 'cover',
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
