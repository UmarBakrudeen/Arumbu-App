import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

import {Image} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductScreen from './screens/ProductScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './components/Auth/SignupScreen';
import ProductDetails from './components/ProductDetails';

import YourOrders from './components/ProfilePages/YourOrder';
import BuyAgain from './components/ProfilePages/BuyAgain';
import YourLists from './components/ProfilePages/YourList';
import Offers from './components/ProfilePages/Offers';
import CustomerService from './components/ProfilePages/CustomerService';

// Import your tab icon images
import homeIcon from './assets/images/home.png';
import cartIcon from './assets/images/cart.png';
import profileIcon from './assets/images/Profile.png';

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
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{headerShown: true}}
    />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="Products" component={ProductScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen
      name="YourOrders"
      component={YourOrders}
      options={{headerShown: true}}
    />
    <Stack.Screen name="BuyAgain" component={BuyAgain} />
    <Stack.Screen name="YourLists" component={YourLists} />
    <Stack.Screen name="Offers" component={Offers} />
    <Stack.Screen name="CustomerService" component={CustomerService} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconSource;

              if (route.name === 'Home') {
                iconSource = focused ? homeIcon : homeIcon;
              } else if (route.name === 'Cart') {
                iconSource = focused ? cartIcon : cartIcon;
              } else if (route.name === 'Profile') {
                iconSource = focused ? profileIcon : profileIcon;
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
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
