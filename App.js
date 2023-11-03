import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux'

import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import CategoryScreen from './screens/CategoryScreen'
import PaymentScreen from './screens/PaymentScreen'
import ProductScreen from './screens/ProductScreen'
import SearchScreen from './screens/SearchScreen'
import ProfileScreen from './screens/ProfileScreen'
import store from './store'


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='Cart' component={CartScreen}/>
        <Stack.Screen name='Category' component={CategoryScreen}/>
        <Stack.Screen name='Products' component={ProductScreen}/>
        <Stack.Screen name='Payment' component={PaymentScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})