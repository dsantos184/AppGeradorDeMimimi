/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Meme from './src/components/Meme';
import {StyleSheet, View} from 'react-native';


export default class App extends Component {

 
  render() {
    return (
      <View style={styles.container}>
        <Meme />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,

  }, 
});
