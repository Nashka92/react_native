import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import ButtonCalculator from './ButtonCalculator';

const buttons = [
  ['AC', '^', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['.', '0', 'Del', '=']
];

const Calculator = () => {
  const [input, setInput] = useState('');
  const [previousInput, setPreviousInput] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (label) => {
    if (label === 'AC') {
      setInput('');
      setPreviousInput(null);
      setOperator(null);
    } else if (label === 'Del') {
      setInput(input.length > 1 ? input.slice(0, -1) : '');
    } else if (['+', '-', 'x', '/'].includes(label)) {
      if (operator && previousInput !== null) {
        const current = parseFloat(input);
        const previous = parseFloat(previousInput);
        let result;

        switch (operator) {
          case '+':
            result = previous + current;
            break;
          case '-':
            result = previous - current;
            break;
          case 'x':
            result = previous * current;
            break;
          case '/':
            result = previous / current;
            break;
          default:
            return;
        }

        setInput(result.toString());
        setPreviousInput(result.toString());
      } else {
        setPreviousInput(input);
      }
      setOperator(label);
      setInput('');
    } else if (label === '=') {
      if (operator && previousInput !== null) {
        const current = parseFloat(input);
        const previous = parseFloat(previousInput);
        let result;

        switch (operator) {
          case '+':
            result = previous + current;
            break;
          case '-':
            result = previous - current;
            break;
          case 'x':
            result = previous * current;
            break;
          case '/':
            result = previous / current;
            break;
          default:
            return;
        }

        setInput(result.toString());
        setPreviousInput(null);
        setOperator(null);
      }
    } else {
      setInput(input + label);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <TextInput style={styles.inputText} value={input || previousInput || '0'} editable={false} />
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((buttonLabel, buttonIndex) => (
              <ButtonCalculator key={buttonIndex} label={buttonLabel} onPress={() => handleButtonPress(buttonLabel)} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
  },
  inputText: {
    color: 'darkgray',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  }
});

export default Calculator;
