import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ButtonCalculator = ({ label, onPress }) => {
  const isWhiteButton = ['.', '0', 'Del', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(label);

  return (
    <TouchableOpacity 
      style={isWhiteButton ? styles.whiteRoundedButton : styles.greySquareButton}
      onPress={onPress}
    >
      <Text style={isWhiteButton ? styles.blackText : styles.whiteText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  whiteRoundedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: 'white'
  },
  greySquareButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 75,
    height: 75,
    borderRadius: 15,
    backgroundColor: 'grey'
  },
  blackText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default ButtonCalculator;
