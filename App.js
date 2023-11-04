import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductScreen from './screens/ProductScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';

// Profile Page Options Navigations
import YourOrders from './components/ProfilePages/YourOrder';
import BuyAgain from './components/ProfilePages/BuyAgain';
import YourLists from './components/ProfilePages/YourList';
import Offers from './components/ProfilePages/Offers';
import CustomerService from './components/ProfilePages/CustomerService';

import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Products" component={ProductScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="YourOrders" component={YourOrders} />
          <Stack.Screen name="BuyAgain" component={BuyAgain} />
          <Stack.Screen name="YourLists" component={YourLists} />
          <Stack.Screen name="Offers" component={Offers} />
          <Stack.Screen name="CustomerService" component={CustomerService} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
