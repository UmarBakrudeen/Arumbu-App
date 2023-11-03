import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ListCategory from '../components/ListCategory';
import BestSeller from '../components/BestSeller';
import {PRODUCTS} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../ProductReducer';

const HomeScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  const total = cart
    .map(item => item.quantity * item.pricePerKg)
    .reduce((curr, prev) => curr + prev, 0);

  const product = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      PRODUCTS.map(item => dispatch(getProducts(item)));
    };
    fetchProducts();
  }, []);

  const navigation = useNavigation();

  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.delivery}>Deliver to</Text>
          <Text style={styles.location}>Navalpattu Burma Colony, Trichy</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.profile}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearch() {
    return (
      <TouchableOpacity
        style={styles.searchBox}
        onPress={() => navigation.navigate('Search')}>
        <Image
          source={require('../assets/icons/search.png')}
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text
          style={{
            fontFamily: 'Lato Italic',
            paddingLeft: 10,
          }}>
          Search Products
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <ScrollView>
        {renderHeader()}
        {renderSearch()}
        <Text style={styles.headerTitle}>Shop by Category</Text>
        <ListCategory />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Best Seller</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Products')}>
            <Text
              style={{
                fontSize: 14,
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginBottom: 5}}>
          {product.map((item, index) => (
            <BestSeller item={item} key={index} />
          ))}
        </ScrollView>
      </ScrollView>
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
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  delivery: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#004600',
  },
  location: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#005600',
  },
  profile: {
    width: 30,
    height: 30,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    width: '95%',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: 'black',
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
});
