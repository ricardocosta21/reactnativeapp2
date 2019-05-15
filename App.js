/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import backgroundGradient from './asset/wall1.jpg';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Platform, ScrollView, ImageBackground, StyleSheet, Text, View, TextInput} from 'react-native';

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
    
      <ScrollView>

      {/* <View style={styles.container}> */}

      <ImageBackground source={require('./asset/wall1.jpg')} style={styles.container}>

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
  

        <View style={styles.sliderOne}>
            <Text style={styles.text}>Income(-Tax): </Text>  
            {/* <Text style={styles.text}>{this.state.sliderOneValue} </Text>          */}
        </View>

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
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />


        <View style={styles.sliderOne}>
            <Text style={styles.text}>Spending: </Text>  
            {/* <Text style={styles.text}>{this.state.sliderOneValue} </Text>          */}
        </View>

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
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />


        <View style={styles.sliderOne}>
            <Text style={styles.text}>Savings: </Text>  
            {/* <Text style={styles.text}>{this.state.sliderOneValue} </Text>          */}
        </View>

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
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        
        <View style={styles.sliderOne}>
            <Text style={styles.text}>Savings1: </Text>  
            {/* <Text style={styles.text}>{this.state.sliderOneValue} </Text>          */}
        </View>

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
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />                      
                      
      </ImageBackground>

      {/* </View> */}

      </ScrollView>
    );
  }        
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
   
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  textInput: {
    margin: 15,
      height: 40,
      width: 100,
  }, 
  
});
