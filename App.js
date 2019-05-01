/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Platform, Text, View, TextInput} from 'react-native';
import styles from './styles'

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

export default class App extends Component {
  
  state = {
    sliderOneChanging: false,
    sliderOneValue: [0],
    nonCollidingMultiSliderValue: [25, 45],
    isFocused: false,
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

handleFocus = event => {
  this.setState({ isFocused: true });
  if (this.props.onFocus) {
    this.props.onFocus(event);
  }
};

handleBlur = event => {
  this.setState({ isFocused: false });
  if (this.props.onBlur) {
    this.props.onBlur(event);
  }
};

  render() {

    const { isFocused } = this.state;
    const { onFocus, onBlur, otherProps } = this.props;

    return (
      
     
      <View style={styles.container}>
        <Text> Net Income: </Text>
        <TextInput style = {styles.input} 
         label='Name'
          placeholder = "Type your text here"
          placeholderTextColor = "#133420"     
          keyboardType = "numeric"
          selectionColor={BLUE}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY
          }
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
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
  
           
      </View>
    );
  }        
}