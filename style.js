import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width / 1;
const height = Dimensions.get("window").height / 1;
const BLUE = "#428AF8";
const LIGHT_GREEN = "#ddfff6";
const MEDIUM_GREEN = "#96ffe3";
const HARD_GREEN = "#53d1af";
const GRAY = "#C8C8C8";
const LIGHT_GRAY = "#F4F4F4";
const WHITE = "#FFFFFF";
export default StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },

  text: {
    alignSelf: "center"
  },

  textInput: {
    textAlign: "center",
    fontSize: 20
  },

  textPercentage: {
    textAlign: "center",
    fontSize: 15
  },

  textPercentageReturns: {
    flexDirection: "row"
  },

  h2: {
    fontSize: 15
  },

  MoneyRowText: {
    flex: 1,
    marginTop: 5,
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  MoneyBottomRowText: {
    flex: 1,
    marginTop: 15,
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "center"
  },

  cardContainer: {
    flex: 1,
    height:80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: LIGHT_GRAY
  },

  itemContainerHeader: {
    flex: 1,
    flexDirection: "row",
    height:30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GRAY
  },

  flatListHeaderLeft: {    
    flex: 3,
    textAlign: "center",
    fontSize: 15
  },

  flatListHeaderCenter: {    
    flex: 3,
    textAlign: "center",
    fontSize: 15
  },

  flatListHeaderRight: {    
    flex: 5,
    textAlign: "center",
    fontSize: 15
  },

  flatListItemLeft: {    
    flex:3,
    textAlign: "center",
    fontSize: 18,
    justifyContent: "center"
  },

  flatListItemCenter: {    
    flex:3,
    textAlign: "center",
    fontSize: 18,
    justifyContent: "center"
  },

  flatListItemRight: {    
    flex:5,
    textAlign: "center",
    fontSize: 18,
    justifyContent: "center"
  },

  itemContainer: {
    flex: 1,
    backgroundColor: WHITE
  },

  flatList: {   
    flex: 1,
    marginBottom: height / 6 
  }
});
