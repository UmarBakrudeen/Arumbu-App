import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ListCategory from '../components/ListCategory';
import BestSeller from '../components/BestSeller';
import {COLORS, PRODUCTS} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../ProductReducer';
import Carousel from 'react-native-snap-carousel';

const sliderImages = [
  require('../assets/images/slide2.png'),
  require('../assets/images/hero-banner.png'),
  require('../assets/images/Logo.png'),
];

const HomeScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  const total = cart
    .map(item => item.quantity * item.pricePerKg)
    .reduce((curr, prev) => curr + prev, 0);

  const windowWidth = Dimensions.get('window').width;

  const product = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      PRODUCTS.map(item => dispatch(getProducts(item)));
    };
    fetchProducts();
  }, [dispatch, product.length]);

  function renderWelcome() {
    return (
      <View style={styles.headerContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.para}>I want to Order Grocery</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/images/cartBag.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#005600',
                marginRight: 20,
                fontWeight: 'bold',
                marginBottom: 15,
                marginLeft: 4,
              }}>
              {cart.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderSearch() {
    return (
      <Pressable
        style={styles.searchBox}
        onPress={() => navigation.navigate('Search')}>
        <Image
          source={require('../assets/icons/search.png')}
          style={{
            width: 15,
            height: 15,
          }}
        />
        <Text
          style={{
            fontFamily: 'Lato Italic',
            paddingLeft: 10,
          }}>
          Search Products
        </Text>
      </Pressable>
    );
  }

  function renderSlider() {
    return (
      <Carousel
        data={sliderImages}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 20}
        layout={'default'}
        layoutCardOffset={10}
        autoplay={true}
        autoplayInterval={2000}
        loop={true}
        renderItem={({item, index}) => (
          <Pressable
            style={{
              width: windowWidth - 40,
              height: 200,
              borderRadius: 15,
              overflow: 'hidden',
              backgroundColor: 'gray',
              objectFit: 'fit',
            }}>
            <Image source={item} style={{width: '100%', height: '100%'}} />
          </Pressable>
        )}
      />
    );
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {renderWelcome()}
          {renderSearch()}
          <View style={styles.categoryContainer}>
            <Text style={styles.headerTitle}> Categories </Text>
            <ListCategory />
          </View>

          <View style={styles.dealsContainer}>
            <Text style={styles.headerTitle}> Deals </Text>
            {renderSlider()}
          </View>
          <View style={styles.sellerContainer}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Best Seller</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginBottom: 5}}>
              {product.map((item, index) => (
                <BestSeller item={item} key={index} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
        {/* {total === 0 ? null : (
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
        )} */}
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f800',
    height: '100%',
  },
  // Welcome Styles
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  dealsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 20,
  },

  categoryContainer: {
    marginTop: 20,
    marginBottom: 20,
    margin: 10,
  },
  sellerContainer: {
    marginTop: 20,
    marginBottom: 20,
    margin: 10,
  },

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
    padding: 12,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 19,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
});
