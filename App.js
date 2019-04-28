/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Slider from '@react-native-community/slider';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{

  constructor(props) {
    super(props)
    this.state = { age: 18 }
   } 

  getVal(val){
    console.warn(val);
    } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Nativeeee!</Text>

        <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={18}
         maximumValue={71}
         value={this.state.age}
         onValueChange={val => this.setState({ age: val })}
         onSlidingComplete={ val => this.getVal(val)}
        />
        <Text style={styles.welcome}>
          {this.state.age}
        </Text>            
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
