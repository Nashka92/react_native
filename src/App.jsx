import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './components/Exo3/Calculator';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
