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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
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

multiSliderValuesChange = values => {
    this.setState({
        multiSliderValue: values,
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
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <Text
                            style={[
                                styles.text,
                                this.state.sliderOneChanging && { color: 'red' },
                            ]}
                        >
                            {this.state.sliderOneValue}
                        </Text>

         <MultiSlider
                        values={this.state.sliderOneValue}
                        sliderLength={280}
                        onValuesChangeStart={this.sliderOneValuesChangeStart}
                        onValuesChange={this.sliderOneValuesChange}
                        onValuesChangeFinish={this.sliderOneValuesChangeFinish}
                    />

         <View style={styles.sliderOne}>
                        <Text style={styles.text}>Two Markers:</Text>
                        <Text style={styles.text}>{this.state.multiSliderValue[0]} </Text>
                        <Text style={styles.text}>{this.state.multiSliderValue[1]}</Text>
                    </View>
                    <MultiSlider
                        values={[
                            this.state.multiSliderValue[0],
                            this.state.multiSliderValue[1],
                        ]}
                        sliderLength={280}
                        onValuesChange={this.multiSliderValuesChange}
                        min={0}
                        max={10}
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
