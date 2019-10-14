/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import CardView from 'react-native-cardview'
import styles from "./style";

var SQLite = require('react-native-sqlite-storage')

//https://aboutreact.com/example-of-pre-populated-sqlite-database-in-react-native/
import {
  Platform,
  Image,
  ScrollView,
  ToolbarAndroid,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
  Dimensions,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  // Icon
} from "native-base";

// 3rd party libraries
import { TextInputMask } from "react-native-masked-text";
import { Icon } from 'react-native-elements'

const LIGHT_GREEN = "#ddfff6";
const MEDIUM_GREEN = "#96ffe3";
const HARD_GREEN = "#53d1af";
const LIGHT_GRAY = "#ECECEC";
const WHITE = "#FFFFFF";

export default class App extends Component {
  
constructor(props)
{
  super(props)

  this.state = {
    isFocused: false,
    age: "26",
    investment: "10000",
    income: "30000",
    spending: "5000",
    savingsNumber: "",
    savings: "",
    savingsPercentage: "",
    incGrowth: "3",
    retSpending: "100000",
    wrRate: "4",
    invReturns: "7",
    fireNumber: "",
    fireDisplayNumber: "",
    currencySymbol: "£",
    percentageSymbol: "%",
    fireData: []
  };
  
  // need to update db 'name' to update the data from the db
  // var db = SQLite.openDatabase({name: 'test27.db', createFromLocation: '~dataState.db'})

  // db.transaction((tx) => {
  //   tx.executeSql('SELECT * FROM data', [], (tx, results) => {
  //       var len = results.rows.length;
  //         if(len > 0)
  //         {
  //           var row = results.rows.item(0);
  //           this.setState({
  //             age: row.age,
  //             investment: row.investment,
  //             income: row.income,
  //             spending: row.spending,
  //             incGrowth: row.incGrowth,
  //             retSpending: row.retSpending,
  //             wrRate: row.wrRate,
  //             invReturns: row.invReturns            
  //           });
  //         }  
          
  //         ToastAndroid.showWithGravityAndOffset(
  //           row.age + " Hey " + row.investment + " income " + row.income + "row.incGrowth " + row.incGrowth + "\nLOADED",
  //           ToastAndroid.LONG,
  //           ToastAndroid.BOTTOM,
  //           25,
  //           50,
  //         );

  //     });
  // });
}



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

  onActionSelected(position) { }

  handleTextChanged(text) {
    this.setState({ text });
  }
 
  onFireReady = () => {
    this.state.fireData = [];

    const incomeFieldAux = this.incomeField.getRawValue();

    const spendingFieldAux = this.spendingField.getRawValue();

    const investmentFieldAux = this.investmentField.getRawValue();

    const retSpendingFieldAux = this.retSpendingField.getRawValue();

    this.state.savingsNumber = incomeFieldAux - spendingFieldAux;

    this.state.savingsPercentage = (
      100 -
      (spendingFieldAux * 100) / incomeFieldAux
    ).toFixed(1);

    if (this.state.wrRate <= 0) return;

    // Calculate FireNumber
    this.state.fireNumber = (
      (retSpendingFieldAux / this.state.wrRate) *
      100
    ).toFixed(0);

    this.compound(
      investmentFieldAux,
      this.state.invReturns / 100 + 1,
      this.state.age,
      incomeFieldAux,
      spendingFieldAux,
      this.state.savingsNumber,
      this.state.fireNumber
    );

    // console.log("---------END---------\n");
  };

  increaseIncome(income) {
    return (income *= this.state.incGrowth / 100 + 1);
  }

  increaseSavings(income, spending) {
    return (newSavingsValue =
      income * (this.state.incGrowth / 100 + 1) - spending);
  }

  formatNumber(number) {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0
    }).format(number);
  }

  compound(investment, interest, age, income, spending, savings, fireNumber) {

    var accumulated = parseInt(investment);

    for (i = age, j = 0; accumulated < fireNumber; i++ , j++) {

      accumulated = parseInt((accumulated + savings) * interest.toFixed(2));

      savings = this.increaseSavings(income, spending);

      income = this.increaseIncome(income);

      var objToPush = {
        index: j,
        age: i,
        value: accumulated.toFixed(0)
      };

      if (accumulated < 0) {
        this.state.savings = 0;

        this.state.savingsPercentage = 0;

        var newStateArray = this.state.fireData.slice();

        newStateArray.push();

        this.setState({ fireData: newStateArray });

        this.state.fireData = newStateArray;

        return;
      }

      this.state.savings = savings;

      var newStateArray = this.state.fireData.slice();

      newStateArray.push(objToPush);

      this.state.fireData = newStateArray;

      this.setState({ fireData: newStateArray });
    }
  }

 

  componentDidMount() {

    var db = SQLite.openDatabase({name: 'test27323212.db', createFromLocation: '~dataState.db'})
    
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM data WHERE id = 1', [], (tx, results) => {
          var len = results.rows.length;
            if(len > 0)
            {
              //
              var row = results.rows.item(0);
              this.setState({
                age: row.age,
                investment: row.investment,
                income: row.income,
                spending: row.spending,
                incGrowth: row.incGrowth,
                retSpending: row.retSpending,
                wrRate: row.wrRate,
                invReturns: row.invReturns            
              });
            }  
            
            ToastAndroid.showWithGravityAndOffset(
              "ID: " + row.id + " Investment: " + row.investment + " income: " + row.income + "row.incGrowth " + row.incGrowth + "\nAAA23232HH",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50,
            );  
        });       
    });   

    // db.close(function () {
    //   console.log("DB closed!");

    // }, function (error) {
    //     console.log("Error closing DB:" + error.message);
    // });


    this.onFireReady();
  } 


  saveDataState() {

    var db = SQLite.openDatabase({  name: 'test27323212.db', createFromLocation: '~dataState.db'})
  

    db.transaction((tx) => {
        tx.executeSql('UPDATE data SET age = 10 WHERE id = 1', [], (tx, results) => {
          var len = results.rows.length;
          if(len > 0)
          {
            var row = results.rows.item(0);
              ToastAndroid.showWithGravityAndOffset(
              'Age: ' + row.age,
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50,
            );    
          }
        });   
    });
      // ToastAndroid.showWithGravityAndOffset(
      //   'Config Saved!',
      //   ToastAndroid.LONG,
      //   ToastAndroid.BOTTOM,
      //   25,
      //   50,
      // );     
      

    //  db.close(function () {
    //     console.log("DB closed!");
    //   }, function (error) {
    //       console.log("Error closing DB:" + error.message);
    //   });
  }

  // componentWillUnmount()
  // {
  //   this.saveDataState();
  // }

  render() {
    const { isFocused } = this.state;
    let colors = [WHITE, LIGHT_GRAY];

    return (
      <View style={styles.container}>
        <Header
          iosBarStyle="light-content"
          androidStatusBarColor={HARD_GREEN}
          style={{ backgroundColor: HARD_GREEN }}>
           <Left>
            <Button transparent>
              <Icon name="menu"
              color='#ffffff' />              
            </Button>

          </Left>    

          <Body>
            <Title style={styles.h2}>FireCalc</Title>
          </Body>

          <Right>
            <Icon            
              name='save'
              type='font-awesome'
              color='#ffffff'
              reverseColor='false'
              underlayColor= '#53d1af'
              iconStyle={styles.headerIcon}
              onPress={() => this.saveDataState()} />
          </Right>
          
        </Header>

        <ScrollView>
            <View style={styles.MoneyRowText}>
              <CardView
                style={styles.cardContainer}>
                <TextInput
                  maxLength={3}
                  keyboardType="numeric"
                  style={styles.textInput}
                  selectionColor={LIGHT_GREEN}
                  underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}   
                  onChangeText={age => this.setState({ age })}
                  //onEndEditing={() => this.onFireReady()}
                  onSelectionChange={() => this.onFireReady()}
                  value={this.state.age}
                />
                <Text style={styles.text}>Age</Text>
              </CardView>

              <CardView
                style={styles.cardContainer}>
                <TextInputMask
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ",",
                    delimiter: ".",
                    unit: "£",
                    suffixUnit: ''
                  }}
                  selectionColor={LIGHT_GREEN}
                  underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}   
                  style={styles.textInput}
                  onChangeText={investment => {
                    this.setState({ investment });
                  }}
                  //onEndEditing={() => this.onFireReady()}
                  onSelectionChange={() => this.onFireReady()}
                  value={this.state.investment}
                  ref={ref => (this.investmentField = ref)}
                />
                <Text style={styles.text}>Investments</Text>
              </CardView>

              <CardView
                style={styles.cardContainer}>
                <View style={styles.textPercentageReturns}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.textInput}
                    selectionColor={LIGHT_GREEN}
                    underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}
                    onChangeText={invReturns => this.setState({ invReturns })}
                    //onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.invReturns}
                  />
                  <Text style={styles.text}>{this.state.percentageSymbol}</Text>
                </View>
                <Text style={styles.text}>Returns</Text>

              </CardView>
            </View>

            <View style={styles.container}>
              <View style={styles.MoneyRowText}>
                <CardView
                  style={styles.cardContainer}>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ",",
                      delimiter: ".",
                      unit: "£",
                      suffixUnit: ''
                    }}
                    selectionColor={LIGHT_GREEN}
                    underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}                    
                    style={styles.textInput}
                    onChangeText={income => {
                      this.setState({ income });
                    }}
                    //onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.income}
                    ref={ref => (this.incomeField = ref)}
                  />
                  <Text style={styles.text}>Income(-Tax)</Text>
                </CardView>

                <CardView
                  style={styles.cardContainer}>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ",",
                      delimiter: ".",
                      unit: "£",
                      suffixUnit: ''
                    }}
                    selectionColor={LIGHT_GREEN}
                    underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}   
                    style={styles.textInput}
                    onChangeText={spending => {
                      this.setState({ spending });
                    }}
                    //onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.spending}
                    ref={ref => (this.spendingField = ref)}
                  />
                  <Text style={styles.text}>Spending</Text>
                </CardView>

                <CardView
                  style={styles.cardContainer}>
                  <Text style={styles.textInput}>
                    {this.formatNumber(this.state.savingsNumber)}
                    {"\n"}
                    <Text style={styles.textPercentage}>
                      ({this.state.savingsPercentage}
                      {this.state.percentageSymbol})
                    </Text>
                  </Text>
                  <Text style={styles.text}> Savings </Text>
                </CardView>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.MoneyRowText}>
                <CardView
                  style={styles.cardContainer}>
                  <View style={styles.textPercentageReturns}>
                    <TextInput
                      keyboardType="numeric"
                      style={styles.textInput}
                      selectionColor={LIGHT_GREEN}
                      underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}
                      onChangeText={incGrowth => this.setState({ incGrowth })}
                      //onEndEditing={() => this.onFireReady()}
                      onSelectionChange={() => this.onFireReady()}
                      value={this.state.incGrowth}
                    />
                    <Text style={styles.text}>{this.state.percentageSymbol}</Text>
                  </View>
                  <Text style={styles.text}>Inc. Growth</Text>
                </CardView>

                <CardView
                  style={styles.cardContainer}>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ",",
                      delimiter: ".",
                      unit: "£",
                      suffixUnit: ''
                    }}
                    selectionColor={LIGHT_GREEN}
                    underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}   
                    style={styles.textInput}
                    onChangeText={retSpending => this.setState({ retSpending })}
                    //onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.retSpending}
                    ref={ref => (this.retSpendingField = ref)}
                  />
                  <Text style={styles.text}>Ret. Spend.</Text>
                </CardView>

                <CardView
                  style={styles.cardContainer}>
                  <View style={styles.textPercentageReturns}>
                    <TextInput
                      keyboardType="numeric"
                      style={styles.textInput}
                      selectionColor={LIGHT_GREEN}
                      underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}
                      onChangeText={wrRate => this.setState({ wrRate })}
                      //onEndEditing={() => this.onFireReady()}
                      onSelectionChange={() => this.onFireReady()}
                      value={this.state.wrRate}
                    />
                    <Text style={styles.text}>{this.state.percentageSymbol}</Text>
                  </View>
                  <Text style={styles.text}>WR Rate</Text>
                </CardView>

              </View>

              <View style={styles.MoneyRowText}>
                <CardView
                  style={styles.cardContainer}>
                  <Text style={styles.textInput}>
                    {this.formatNumber(this.state.fireNumber)}
                  </Text>
                  <Text style={styles.text}> FIRE # </Text>
                </CardView>
              </View>

            </View>



          <View style={styles.itemContainerHeader}>
            <Text style={styles.flatListHeaderLeft}>#</Text>
            <Text style={styles.flatListHeaderCenter}>Age</Text>
            <Text style={styles.flatListHeaderRight}>Balance</Text>
          </View>

          <View style={styles.itemContainer}>
            {
              <FlatList
                style={styles.flatList}
                data={this.state.fireData}
                keyExtractor={(item, index) => "key" + index}
                renderItem={({ item, index }) => (                
                  <View style={{ 
                    flex: 1,
                    flexDirection: "row",
                    paddingTop: 15,
                    paddingBottom: 15,
                    backgroundColor: colors[index % colors.length] }}>
                    <Text style={styles.flatListItemLeft}>{item.index}</Text>
                    <Text style={styles.flatListItemCenter}>{item.age}</Text>
                    <Text style={styles.flatListItemRight}>{this.formatNumber(item.value)}</Text>
                  </View>
                )}
               
              />
            }
          </View>

        </ScrollView>
      </View>
    );
  }
}
