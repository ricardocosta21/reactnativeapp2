/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{

  state = {
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [3, 7],
    nonCollidingMultiSliderValue: [0, 100],
};

sliderOneValuesChangeStart = () => {
  this.setState({
      sliderOneChanging: true,
  });
};

sliderOneValuesChange = values => {
  let newValues = [0];
  newValues[0] = values[0];
  this.setState({
      sliderOneValue: newValues,
  });
};

sliderOneValuesChangeFinish = () => {
  this.setState({
      sliderOneChanging: false,
  });
};

  constructor(props) {
    super(props)    
    this.state = { multiSliderValue: [1,5]}
    this.state = { initNW: 0 }
    this.state = { age: 18 }
    this.state = { testVar: 20 }
    this.state = { leftValue: 20 }
    this.state = { rightValue: 20 }
   } 
 

   // Console Debug message
  // getVal(val){
  //   console.warn(val);
  //   } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Compound Calculator!</Text>        

        <MultiSlider
            values={this.state.sliderOneValue}
            sliderLength={280}
            onValuesChangeStart={this.sliderOneValuesChangeStart}
            onValuesChange={this.sliderOneValuesChange}
            onValuesChangeFinish={this.sliderOneValuesChangeFinish}
        />

        <Text style={styles.welcome}>
        <Text style={{color: 'black'}}>testVar: {this.state.sliderOneValue}</Text>          
        </Text>

        {/* Age */}
        <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={0}
         maximumValue={120}
         value={this.state.age}
         onValueChange={val => this.setState({ age: val })}
        //  onSlidingComplete={ val => this.getVal(val)}
        />       
           

        <Text style={styles.welcome}>
        <Text style={{color: 'black'}}>Age: {this.state.age}</Text>          
        </Text>  

        {/* Initial Networth */}
        <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={0}
         maximumValue={50000}
         value={this.state.initNW}
         onValueChange={val => this.setState({ initNW: val })}
        //  onSlidingComplete={ val => this.getVal(val)}
        />
        <Text style={styles.welcome}>
        <Text style={{color: 'black'}}>Networth: {this.state.initNW}</Text>          
        </Text>  

         {/* Initial Networth */}
         <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={0}
         maximumValue={50000}
         value={this.state.initNW}
         onValueChange={val => this.setState({ testVar: val })}
        //  onSlidingComplete={ val => this.getVal(val)}
        />
        <Text style={styles.welcome}>
        <Text style={{color: 'black'}}>testVar: {this.state.testVar}</Text>          
        </Text>  

        {/* 
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text> */}

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
