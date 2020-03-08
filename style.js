/* eslint-disable no-unused-vars */
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width / 1;
const height = Dimensions.get('window').height / 1;
const BLUE = '#428AF8';
const LIGHT_GREEN = '#ddfff6';
const MEDIUM_GREEN = '#96ffe3';
const HARD_GREEN = '#53d1af';
const GRAY = '#C8C8C8';
const LIGHT_GRAY = '#F4F4F4';
const WHITE = '#FFFFFF';
const TRANSPARENT = 'rgba(52, 52, 52, alpha)';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },

  imageContainer: {
    flex: 1,
    width: '100%',
  },

  headerContainer: {
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
  },

  splashContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    alignSelf: 'center',
  },

  settingsTextCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingsPickerCenter: {
    alignItems: 'center',
  },

  headerIcon: {
    marginRight: 10,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 36,
    marginBottom: 16,
  },

  androidButtonText: {
    color: 'blue',
    fontSize: 20,
  },

  textInput: {
    textAlign: 'center',
    fontSize: 20,
  },

  textPercentage: {
    textAlign: 'center',
    fontSize: 15,
  },

  textPercentageReturns: {
    flexDirection: 'row',
  },

  h2: {
    fontSize: 15,
  },

  MoneyRowText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  MoneyBottomRowText: {
    flex: 1,
    marginTop: 15,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cardContainer: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainerHeader: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  flatListHeaderLeft: {
    flex: 3,
    textAlign: 'center',
    fontSize: 15,
  },

  flatListHeaderCenter: {
    flex: 3,
    textAlign: 'center',
    fontSize: 15,
  },

  flatListHeaderRight: {
    flex: 5,
    textAlign: 'center',
    fontSize: 15,
  },

  flatListItemLeft: {
    flex: 3,
    textAlign: 'center',
    fontSize: 18,
    justifyContent: 'center',
  },

  flatListItemCenter: {
    flex: 3,
    textAlign: 'center',
    fontSize: 18,
    justifyContent: 'center',
  },

  flatListItemRight: {
    flex: 5,
    textAlign: 'center',
    fontSize: 18,
    justifyContent: 'center',
  },

  flatListSettingsContainer: {
    width: 200,
  },

  flatListSettingsLeft: {
    fontSize: 25,
    paddingBottom: 20,
  },

  itemContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  flatList: {
    flex: 1,
    marginBottom: height / 6,
  },
});
