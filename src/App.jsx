import {View, StyleSheet} from 'react-native';
import Exo1 from './components/Exo1/Exo1';
const App = () => {
  return (
    <View style={styles.container}>
      <Exo1 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faebd7',
    flex: 1,
  },
});

export default App;
