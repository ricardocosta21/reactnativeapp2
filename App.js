/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import styles from './style'
import {Platform,Image, ScrollView, ImageBackground,ToolbarAndroid, Text, View, TextInput, FlatList, Dimensions} from 'react-native';

// 3rd party libraries
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";
const WHITE = "#FFFFFF";

export default class App extends Component {


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

onActionSelected(position) {
}

handleTextChanged(text) {
  console.warn('text changed !');
  this.setState({ text });
}
  

AddItemsToArray=()=>{
 
  //Adding Items To Array.
  this.state.fireData.push( this.state.fireData.toString() );

}

state = {
  isFocused: false,
  age: '25',
  investment: '1000',
  income: '50000',
  spending: '40000',
  savings: '',
  incGrowth: '3',
  retSpending: '30000',
  wrRate: '4',
  invReturns: '7',
  fireNumber: '',
  currencySymbol:'£',
  percentageSymbol:'%',
  fireData:["0"]
};

// fireData = [
    
//   ];

compound( input, interest, length) {
  var accumulated = input
  
   
	for ( i=0; i < length; i++ ) {
    accumulated *= interest
   
    

    this.state.fireData.age = i;  
    this.AddItemsToArray();
    console.log(this.state.fireData.age);
    // this.state.fireData.value = accumulated;
	}
  console.log(input + ' to ' + accumulated + ' at ' + interest +  ' over ' + length + ' years' )
  //this.setState({fireData : this.state.fireData})
}

onFireReady = event => { 
  console.log("Got here 1");
  this.compound(1000, 1.04, 25);
  console.log("Got here 2");
}

  render() {

    const { isFocused } = this.state;
    const { onFocus, onBlur, otherProps } = this.props;
    const {age} = this.state;    

   

    return (
    
      <View style={styles.container}>

      <ToolbarAndroid
        style={styles.toolbar}
        title="FireCalc"
        onActionSelected={this.onActionSelected}
        titleColor= "#FFFFFF"        
        actions = {[
          {title: "Log out", show: "never"}
        ]}
      />

      <ScrollView>
{/*        
      <View>
      {
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View  style = {styles.itemContainer}>
              <TextInput
                label='Name'
                placeholder={item.id}                
                placeholderTextColor = "#133420"     
                keyboardType = "numeric"
                selectionColor={BLUE}
                underlineColorAndroid={
                  isFocused ? BLUE : LIGHT_GRAY
                }
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                style={styles.itemInput}
                onChangeText={(textAge) => this.setState({textAge})}
                value={this.state.textAge}
              />
            </View>
          )}
          keyExtractor={item => item.id} />
      }
      </View> */}

      {/* <ImageBackground source={require('./asset/trianglify.png')} style={styles.container}> */}
     
      <View style={styles.MoneyRowText}>       
        <View style={styles.h2}>
          <Text style={styles.text}>Age</Text>
          <TextInput
            maxLength={2}    
            keyboardType = "numeric"
            selectionColor={BLUE}
            underlineColorAndroid={
              isFocused ? BLUE : LIGHT_GRAY
            }
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={styles.textInput}
            onChangeText={(age) => this.setState({age})}
            value={this.state.age}
          />
        </View>
        <View style={styles.h2}>
          <Text style={styles.text}>Investments</Text>
          <TextInput
            keyboardType = "numeric"
            selectionColor={BLUE}
            underlineColorAndroid={
              isFocused ? BLUE : LIGHT_GRAY
            }
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={styles.textInput}
            onChangeText={(investment) => this.setState({investment})}
            value={this.state.investment}
          />
        </View>
      </View>

      <View style={styles.MoneyRowText}>
        <View style={styles.h2}>
            <Text style={styles.text}>Income(-Tax)</Text>
            <TextInput
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(income) => this.setState({income})}
              value={this.state.income}
            />
        </View>
        <View style={styles.h2}>
            <Text style={styles.text}>Spending</Text>
            <TextInput  
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(spending) => this.setState({spending})}
              value={this.state.spending}
            />
        </View>
        <View style={styles.h2}>
            <Text style={styles.text}>Savings</Text>
            <Text style={styles.textInput}> {'\u00A3'} {this.state.income - this.state.spending } 
            {' '}({((this.state.spending * 100) / this.state.income).toFixed(2)}{this.state.percentageSymbol}) </Text>
            
          </View>
        </View>

        <View style={styles.MoneyRowText}>
          <View style={styles.h2}>
            <Text style={styles.text}>Inc. Growth</Text>
            <TextInput  
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(incGrowth) => this.setState({incGrowth})}
              value={this.state.incGrowth}
            />
          </View>

          <View style={styles.h2}>
            <Text style={styles.text}>Ret. Spending</Text>
            <TextInput    
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(retSpending) => this.setState({retSpending})}
              
              value={this.state.retSpending}
            />
          </View>
          <View style={styles.h2}>
            <Text style={styles.text}>WR Rate</Text>
            <TextInput    
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              // onChangeText={(wrRate) => this.setState({wrRate})}
              onChangeText={() => this.onFireReady()}              
              value={this.state.wrRate}
            />
          </View>
        </View>

        <View style={styles.MoneyRowText}>
          <View style={styles.h2}>
            <Text style={styles.text}>Inv. Returns</Text>
            <TextInput    
              keyboardType = "numeric"
              selectionColor={BLUE}
              underlineColorAndroid={
                isFocused ? BLUE : LIGHT_GRAY
              }
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              style={styles.textInput}
              onChangeText={(invReturns) => this.setState({invReturns})}
              value={this.state.invReturns}
            />
          </View>

          <View style={styles.h2}>
            <Text style={styles.text}>FIRE #</Text>
            <Text
             
             style={styles.textInput}>{ (this.state.retSpending / this.state.wrRate) * 100 }</Text>     
                 
          </View>
        </View>





        <View style={styles.itemContainer}>
        {
          <FlatList
            data={this.state.fireData}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          />
        }
        </View> 
    

     

      </ScrollView>

      </View>
    );
  }        
}