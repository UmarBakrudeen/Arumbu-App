import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {incrementQty} from '../ProductReducer';
import {useNavigation} from '@react-navigation/native';

import defaultImage from '../assets/images/basket.png';

import {addToCart} from '../CartReducer';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';

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

  const window = useWindowDimensions();
  const CARD_SIZE = (window.width - 2 * 20 - 20 - 10) / 2;

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View
        style={[
          styles.container,
          {
            width: CARD_SIZE,
          },
        ]}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={item && item.Img ? item.Img : defaultImage}
            style={{
              width: CARD_SIZE - 10,
              height: CARD_SIZE - 10,
              borderRadius: 5,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.Qty}>{item.Qty}</Text>
          <Text style={styles.price}>Rs. {item.pricePerKg}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 10,
  },
  buttonCart: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: '#004600',
    marginTop: 12,
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#90EE90',
    color: 'white',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: '#004600',
    marginTop: 12,
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#005600',
    color: 'white',
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
  buttonText: {
    color: '#004600',
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },
  price: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
    color: '#005600',
    fontWeight: 'bold',
    marginRight: 10,
  },
  Qty: {
    fontFamily: 'Lato-Regular',
    color: '#005600',
    fontSize: 11,
    marginVertical: 2,
    marginLeft: 10,
  },
});
