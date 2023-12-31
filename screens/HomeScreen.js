import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ListCategory from '../components/ListCategory';
import BestSeller from '../components/BestSeller';
import {COLORS, PRODUCTS} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../ProductReducer';
import Carousel from 'react-native-snap-carousel';
import Logo from '../assets/images/Logo.png';

const sliderImages = [
  require('../assets/images/slide1.png'),
  require('../assets/images/slide2.png'),
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
      <View style={styles.headerContent}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={Logo}
              style={{
                width: 100,
                height: 40,
                resizeMode: 'cover',
              }}
            />
          </View>
          <Image
            source={require('../assets/icons/bell.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <View style={styles.searchContainer}>
          <Pressable
            style={styles.searchBox}
            onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../assets/icons/search.png')}
              style={{
                width: 15,
                height: 15,
                marginLeft: 15,
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Search Products"
              placeholderTextColor="#888"
            />
          </Pressable>
        </View>
      </View>
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
              height: 150,
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

  function renderSellerItems({item, index}) {
    const cardStyle = {
      width: windowWidth / 2 - 15,
      margin: 5,
    };

    return (
      <View style={cardStyle}>
        <BestSeller item={item} />
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {renderWelcome()}
          <View style={styles.dealsContainer}>
            <Text style={styles.headerTitle}> Deals </Text>
            {renderSlider()}
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.headerTitle}> All Categories </Text>
            <ListCategory />
          </View>

          <View style={styles.sellerContainer}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Best Seller</Text>
            </View>
            <FlatList
              data={product}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSellerItems}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginBottom: 5}}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f800',
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
  headerContent: {
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    marginLeft: 10,
    color: 'black',
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
