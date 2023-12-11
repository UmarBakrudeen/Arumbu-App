import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import store from './store';

const ArumbuGrocery = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('ArumbuGrocery', () => ArumbuGrocery);
