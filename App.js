/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import styles from './style'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Platform, ScrollView, ImageBackground, Text, View, TextInput} from 'react-native';

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

handleTextChanged(text) {
  console.warn('text changed !');
  handleAddMore = (text, textInput) => {
    
  }
  this.setState({ text });
}

  render() {

    const { isFocused } = this.state;
    const { onFocus, onBlur, otherProps } = this.props;

    return (
    
      <ScrollView>

      <ImageBackground source={require('./asset/trianglify.png')} style={styles.container}>

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
            <Text style={styles.text}>Investments: </Text>  
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
  

        <View style={styles.MoneyRowText}>

          <View style={styles.h2}>
              <Text style={styles.text}>Income(-Tax)</Text>
              <TextInput style = {styles.input} 
                label='Name'
                placeholder = "0"
                placeholderTextColor = "#133420"     
                keyboardType = "numeric"
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.textInput}
                onChangeText = {(textIncome) => { this.handleAddMore(textIncome, 'textIncome'); }}
                value={this.state.textIncome}
              />
            </View>

            <View style={styles.h2}>
              <Text style={styles.text}>Spending</Text>
              <TextInput style = {styles.input} 
                label='Name'
                placeholder = "0"
                placeholderTextColor = "#133420"     
                keyboardType = "numeric"
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.textInput}
                onChangeText={(textSpending) => this.setState({textSpending})}
                value={this.state.textSpending}
              />
            </View>

            <View style={styles.h2}>
              <Text style={styles.text}>Savings</Text>
              <TextInput style = {styles.input} 
                label='Name'
                placeholder = "0"
                placeholderTextColor = "#133420"     
                keyboardType = "numeric"
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.textOutput}
                onChangeText={(textSavings) => this.setState({textSavings})}
                value={this.state.textSavings}
              />         
            </View>
          </View>

        <View style={styles.instructions}>
            <Text style={styles.text}>Test1: </Text>  
            {/* <Text style={styles.text}>{this.state.sliderOneValue} </Text>          */}
        </View>

        <TextInput style = {styles.instructions} 
        label='Name'
          placeholder = "0"
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

      </ImageBackground>

      </ScrollView>
    );
  }        
}