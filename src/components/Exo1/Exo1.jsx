import {Text, Image, View, StyleSheet} from 'react-native';

const Exo1 = () => {
  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.divText}>
        <Text>
          Nom : <Text style={styles.bold}>Capitaine</Text>
        </Text>
        <Text>
          Prénom : <Text style={styles.bold}>Haddock</Text>
        </Text>
        <Text>
          Téléphone : <Text style={styles.bold}>01.23.45.67.89</Text>
        </Text>
        <Text>
          Adresse :{' '}
          <Text style={styles.bold}>35 rue des pias 59200 Tourcoing</Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  divText: {
    margin: 10,
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Exo1;
