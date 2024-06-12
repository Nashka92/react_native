import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet, Image, Modal} from 'react-native';

const Input = ({onAddItem, onCancel}) => {
  const [textInput, setTextInput] = useState(''); // initialise la saisi dans l'input

  const handleAddItem = () => {
    if (textInput.trim() !== '') {
      // vérifie si la chaine n'est pas vide,
      onAddItem(textInput); //alors le onAddItem sera exécuté et sera passé au composant parent
      setTextInput('');
    }
  };

  return (
    <Modal>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_1280.png',
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Tapez votre article ici !"
          value={textInput}
          onChangeText={setTextInput}
        />
        <View style={styles.buttonContainer}>
          <Button title="Ajouter article" onPress={handleAddItem} />
          <Button title="Cancel" color="red" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  image: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
});

export default Input;
