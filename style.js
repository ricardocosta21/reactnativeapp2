import { StyleSheet, Dimensions } from 'react-native';

const numColumns = 3;
const size = Dimensions.get('window').width/1;

export default StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E2E2',
    width: '100%',
    height: '100%',
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
    paddingVertical: 5,
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
    marginTop: 40,
    fontSize: 15,
    flexDirection: 'row'
  },

  MoneyRowInput: {
    flex: 1,
    flexDirection: 'row'
  },

  toolbar: {
    backgroundColor: '#26CAC4',
    height: 56,
    alignSelf: 'stretch',
    textAlign: 'center',
  }, 

  itemContainer: {
    width: size,
    height: 60,    
    textAlign: 'center', // <-- the magic
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
    backgroundColor: '#FFFFFF',
  },

  iteminput: {
    flex: 1,
    margin: 0.5,
    fontSize: 16,
    paddingTop:20,
        paddingBottom:10,
        paddingLeft:50,
        paddingRight:20, 
        borderRadius:5,
    backgroundColor: '#FFFFFF',
  },

});