/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import styles from "./style";
import {
  Platform,
  Image,
  ScrollView,
  ToolbarAndroid,
  Text,
  View,
  TextInput,
  FlatList,
  Dimensions
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
  Icon
} from "native-base";
// 3rd party libraries
import { TextInputMask } from "react-native-masked-text";

const BLUE = "#428AF8";
const LIGHT_GREEN = "#ddfff6";
const MEDIUM_GREEN = "#96ffe3";
const HARD_GREEN = "#53d1af";
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

  onActionSelected(position) {}

  handleTextChanged(text) {
    console.warn("text changed !");
    this.setState({ text });
  }

  state = {
    year: "",
    isFocused: false,
    age: "26",
    investment: "140000",
    income: "54000",
    spending: "40000",
    savingsNumber: "",
    savings: "",
    savingsPercentage: "",
    incGrowth: "3",
    retSpending: "35000",
    wrRate: "4",
    invReturns: "7",
    fireNumber: "",
    fireDisplayNumber: "",
    currencySymbol: "£",
    percentageSymbol: "%",
    fireData: []
  };

  onFireReady = () => {
    console.log("\n\n\n\n\n\n---------BEGIN---------");
    console.log("\nIncome:" + this.state.income);
    console.log("Spending:" + this.state.spending);

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

    console.log("---------END---------\n");
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

    for (i = age, j = 0; accumulated < fireNumber; i++, j++) {
      accumulated = (accumulated + savings) * interest.toFixed(2);

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

      this.setState({ fireData: newStateArray });

      this.state.fireData = newStateArray;
    }

    console.log(
      investment +
        " to " +
        accumulated.toFixed(0) +
        " at " +
        interest +
        " within " +
        j +
        " years"
    );
  }

  componentDidMount() {
    this.onFireReady();
  }

  render() {
    const { isFocused } = this.state;
    return (
      <View style={styles.container}>
        <Header
          iosBarStyle="light-content"
          androidStatusBarColor={HARD_GREEN}
          style={{ backgroundColor: MEDIUM_GREEN }}
        >
          <Left>
            <Button transparent style={styles.header}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.h2}>FireCalc</Title>
          </Body>
          <Right />
        </Header>

        <ScrollView>
          <View style={styles.backgroundItem1}>

            <View style={styles.MoneyRowText}>
              <View style={styles.h2}>
                <TextInput
                  maxLength={2}
                  keyboardType="numeric"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  style={styles.textInput}
                  onChangeText={age => this.setState({ age })}
                  onEndEditing={() => this.onFireReady()}
                  onSelectionChange={() => this.onFireReady()}
                  value={this.state.age}
                />
                <Text style={styles.text}>Age</Text>
              </View>

              <View style={styles.h2}>
                <TextInputMask
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ",",
                    delimiter: ".",
                    unit: "£",
                    suffixUnit: ""
                  }}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  style={styles.textInput}
                  onChangeText={investment => {
                    this.setState({ investment });
                  }}
                  onEndEditing={() => this.onFireReady()}
                  onSelectionChange={() => this.onFireReady()}
                  value={this.state.investment}
                  ref={ref => (this.investmentField = ref)}
                />
                <Text style={styles.text}>Investments</Text>
              </View>			  
            </View>

            <View style={styles.container}>
              <View style={styles.MoneyRowText}>
                <View style={styles.h2}>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ",",
                      delimiter: ".",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    //   selectionColor={LIGHT_GREEN}
                    //   underlineColorAndroid={isFocused ? LIGHT_GREEN : LIGHT_GRAY}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    onChangeText={income => {
                      this.setState({ income });
                    }}
                    onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.income}
                    ref={ref => (this.incomeField = ref)}
                  />
                  <Text style={styles.text}>Income(-Tax)</Text>
                </View>

                <View style={styles.h2}>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ",",
                      delimiter: ".",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    onChangeText={spending => {
                      this.setState({ spending });
                    }}
                    onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.spending}
                    ref={ref => (this.spendingField = ref)}
                  />
                  <Text style={styles.text}>Spending</Text>
                </View>

				<View style={styles.h2}>                  
                  <Text style={styles.textInput}>
                    {this.formatNumber(this.state.savingsNumber)} 
					{"\n"}
					({this.state.savingsPercentage}
                    {this.state.percentageSymbol}){" "}
                  </Text>
				  <Text style={styles.text}> Savings </Text>
                </View>
				
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.MoneyRowText}>
                <View style={styles.h2}>
                  <TextInput
                    keyboardType="numeric"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    onChangeText={incGrowth => this.setState({ incGrowth })}
                    onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.incGrowth}
                  />
				  <Text style={styles.text}>Inc. Growth</Text>
                </View>

                <View style={styles.h2}>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ",",
                      delimiter: ".",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    onChangeText={retSpending => this.setState({ retSpending })}
                    onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.retSpending}
                    ref={ref => (this.retSpendingField = ref)}
                  />
				   <Text style={styles.text}>Ret. Spending</Text>

                </View>

                <View style={styles.h2}>                  
                  <TextInput
                    keyboardType="numeric"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    onChangeText={wrRate => this.setState({ wrRate })}
                    onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.wrRate}
                  />
				  <Text style={styles.text}>WR Rate</Text>
                </View>

                <View style={styles.h2}>                 
                  <TextInput
                    keyboardType="numeric"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    onChangeText={invReturns => this.setState({ invReturns })}
                    onEndEditing={() => this.onFireReady()}
                    onSelectionChange={() => this.onFireReady()}
                    value={this.state.invReturns}
                  />
				   <Text style={styles.text}>Returns</Text>
                </View>
              </View>

              <View style={styles.MoneyBottomRowText}>  
                <View style={styles.h2}>                  
                  <Text style={styles.textInput}>
                    {this.formatNumber(this.state.fireNumber)}
                  </Text>
				  <Text style={styles.text}> FIRE # </Text>
                </View>
              </View>

            </View>
          </View>



          <View>
            <Text style={styles.flatListHeader}># 	Age 	Balance</Text>
          </View>

          <View style={styles.itemContainer}>
            {
              <FlatList
                style={styles.flatList}
                data={this.state.fireData}
                renderItem={({ item }) => (
                  <Text style={styles.item}>
                    {item.index} {"              " + item.age}
                    {"              " + this.formatNumber(item.value)}
                  </Text>
                )}
                keyExtractor={(item, index) => "key" + index}
              />
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
