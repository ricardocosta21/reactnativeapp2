/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  
  state = {
    sliderOneChanging: false,
    sliderOneValue: [0],
    nonCollidingMultiSliderValue: [25, 45],
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

nonCollidingMultiSliderValuesChange = values => {
    this.setState({
        nonCollidingMultiSliderValue: values,
    });
};

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}

        <View style={styles.sliderOne}>
            <Text style={styles.text}>Initial Networth: </Text>  
            <Text style={styles.text}>{this.state.sliderOneValue} </Text>         
        </View>

         <MultiSlider
            values={this.state.sliderOneValue}
            sliderLength={280}
            min={0}
            max={100000}
            step={1}
            onValuesChangeStart={this.sliderOneValuesChangeStart}
            onValuesChange={this.sliderOneValuesChange}
            onValuesChangeFinish={this.sliderOneValuesChangeFinish}
            allowOverlap
            snapped
          />

        <View style={styles.sliderOne}>
            <Text style={styles.text}>Age: [</Text>
            <Text style={styles.text}>{this.state.nonCollidingMultiSliderValue[0]} </Text>
            <Text style={styles.text}> - {this.state.nonCollidingMultiSliderValue[1]}]</Text>
        </View>

        <MultiSlider
            values={[
                this.state.nonCollidingMultiSliderValue[0],
                this.state.nonCollidingMultiSliderValue[1],
            ]}
            sliderLength={280}
            onValuesChange={this.nonCollidingMultiSliderValuesChange}
            min={0}
            max={100}
            step={1}
            allowOverlap
            snapped
        />

       
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
  text: {
    alignSelf: 'center',
    paddingVertical: 20,
  },
  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
});
