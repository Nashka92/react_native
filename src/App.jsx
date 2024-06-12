import {View, StyleSheet} from 'react-native';
import Exo2 from './components/Exo2/Exo2';
const App = () => {
  return (
    <View style={styles.container}>
      <Exo2/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default App;
