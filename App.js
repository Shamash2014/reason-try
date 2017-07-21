import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { app } from './lib/js/src/app';

export default class App extends React.Component {
  render() {
    return React.createElement(app);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
