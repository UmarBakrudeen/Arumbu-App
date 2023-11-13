import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementQuantity, decrementQuantity} from '../CartReducer';

const ProductDetails = ({route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart); // Assuming "cart" is a valid property in your Redux state

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function renderProductDescription(item) {
    if (item.description) {
      return <Text style={styles.productDescription}>{item.description}</Text>;
    } else {
      return (
        <Text style={styles.productDescription}>
          Product description not available
        </Text>
      );
    }
  }

  const handleBuyNow = () => {
    dispatch(incrementQuantity(item, quantity));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={item.Img} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        {renderProductDescription(item)}
        <Text style={styles.price}>Price: Rs. {item.pricePerKg}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
        <View style={styles.quantityButtons}>
          <TouchableOpacity style={styles.button} onPress={handleDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  productName: {
    fontFamily: 'Lato-Bold',
    color: '#005600',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginTop: 10,
  },
  quantity: {
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#005600',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#005600',
  },
  buyButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProductDetails;
