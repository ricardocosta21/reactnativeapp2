import { StyleSheet, Dimensions } from 'react-native';

const numColumns = 3;
const size = Dimensions.get('window').width/1;
const BLUE = "#428AF8";
const LIGHT_GREEN ="#7ee7e4";
const LIGHT_GRAY = "#D3D3D3";
const WHITE = "#FFFFFF";
export default StyleSheet.create({

  container: {   
    backgroundColor: 'transparent'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  header: {
    borderTopColor: LIGHT_GREEN,
  },

  text: {
    alignSelf: 'center',
    paddingVertical: 5,
  },

  textInput: {
    textAlign: 'center',
    height: 40,
    width: 100,
  }, 

  textOutput: {
    textAlign: 'center',
    height: 38,
    width: 100,
  }, 

  h2:{
    fontSize: 15,    
  },

  MoneyRowText: {
    flex: 1,
    marginTop: 30,
    fontSize: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // toolbar: {
  //   backgroundColor: '#7ee7e4',
  //   height: 56,
  //   alignSelf: 'stretch',
  //   textAlign: 'center',
  // }, 

  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
    backgroundColor: '#7ee7e4',
  },

  itemContainer: {
    flex: 1,  
    width: size,
    marginTop: 10,     
    flexDirection: "row",
    backgroundColor: WHITE,
  },
  

  item: {
    flex: 1,
    margin: 0.5,
    fontSize: 16,
    paddingTop:20,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:5,
    backgroundColor: LIGHT_GRAY,
  },

  flatList: {
    flex: 1,   
    paddingTop:20,
  },
 

});