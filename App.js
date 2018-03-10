import React, { Component } from 'react';
import { View } from 'react-native';

import RootNavigation from './app/navigation/RootNavigation'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
    );
  }
}