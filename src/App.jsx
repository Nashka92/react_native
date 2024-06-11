import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.divText}>
        <Text>Nom : <Text style={styles.bold}> Capitaine</Text></Text>
        <Text>Prénom : <Text style={styles.bold}> Haddock</Text></Text>
        <Text>Téléphone : <Text style={styles.bold}> 01.23.45.67.89</Text></Text>
        <Text>Adresse : <Text style={styles.bold}> 35 rue des pias 59200 Tourcoing</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faebd7',
    flex: 1,
  },
  divText: {
    margin: 30
  },
  bold: {
    fontWeight: "bold",
  }
});

export default App;
