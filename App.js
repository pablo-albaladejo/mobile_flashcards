import React, { Component } from 'react';
import { View } from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './app/reducers/root_reducer';

import RootNavigation from './app/navigation/RootNavigation'

export default class App extends Component {
  render() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return (
      <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))}>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </Provider>
    );
  }
}