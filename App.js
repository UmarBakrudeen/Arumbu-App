/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux';

import {Image} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductScreen from './screens/ProductScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './components/Auth/SignupScreen';
import SignInScreen from './components/Auth/SignInScreen';
import OrderScreen from './screens/OrderScreen';
import FavoriteScreen from './screens/FavoriteScreen';

import ProductDetails from './components/ProductDetails';

import YourOrders from './components/ProfilePages/YourOrder';
import BuyAgain from './components/ProfilePages/BuyAgain';
import YourLists from './components/ProfilePages/YourList';
import Offers from './components/ProfilePages/Offers';
import CustomerService from './components/ProfilePages/CustomerService';

// Import your tab icon images
import homeIcon from './assets/images/home.png';
import cartIcon from './assets/images/cart.png';
import favIcon from './assets/icons/Fav.png';
import cardBagIcon from './assets/images/cartBag.png';
import menuIcon from './assets/images/menu.png';

import store from './store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="Products" component={ProductScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{headerShown: true, headerTitleAlign: 'center'}}
    />
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{headerShown: true, headerTitleAlign: 'center'}}
    />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);

// eslint-disable-next-line no-unused-vars
const ProfileStack = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    <Stack.Screen
      name="YourOrders"
      component={YourOrders}
      options={{headerShown: true, headerTitleAlign: 'center'}}
    />
    <Stack.Screen name="BuyAgain" component={BuyAgain} />
    <Stack.Screen name="YourLists" component={YourLists} />
    <Stack.Screen name="Offers" component={Offers} />
    <Stack.Screen name="CustomerService" component={CustomerService} />
  </Stack.Navigator>
);

const App = () => {
  const cartCount = useSelector(state => state.cart.cart.length);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconSource;

              if (route.name === 'Home') {
                iconSource = focused ? homeIcon : homeIcon;
              } else if (route.name === 'My Cart') {
                iconSource = focused ? cartIcon : cartIcon;
              } else if (route.name === 'Order') {
                iconSource = focused ? cardBagIcon : cardBagIcon;
              } else if (route.name === 'My Favorite') {
                iconSource = focused ? favIcon : favIcon;
              } else if (route.name === 'Menu') {
                iconSource = focused ? menuIcon : menuIcon;
              }

              return (
                <Image
                  source={iconSource}
                  style={{
                    width: size,
                    height: size,
                    tintColor: color,
                  }}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#005600',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="My Cart"
            component={CartScreen}
            options={{
              tabBarBadge: cartCount > 0 ? cartCount : null,
              headerShown: true,
              headerTitleAlign: 'center',
            }}
          />
          <Tab.Screen
            name="Order"
            component={OrderScreen}
            options={{headerShown: true, headerTitleAlign: 'center'}}
          />
          <Tab.Screen
            name="My Favorite"
            component={FavoriteScreen}
            options={{headerShown: true, headerTitleAlign: 'center'}}
          />
          <Tab.Screen
            name="Menu"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
