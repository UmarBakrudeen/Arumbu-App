import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import EmptyCart from '../assets/images/emptyCart.png';
import {useNavigation} from '@react-navigation/native';

const FavoriteScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image source={EmptyCart} style={styles.image} />
      <Text style={styles.noOrdersText}>Guest Mode</Text>
      <Text style={styles.para}>New you are in guest mode.</Text>
      <Text style={styles.desc}>
        Please login to enjoy the more awesome features.
      </Text>
      <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton}>
        <Text style={styles.buttonText}> Login</Text>
      </TouchableOpacity>
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
  desc: {
    fontSize: 15,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#005600',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FavoriteScreen;
