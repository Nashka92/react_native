import React, {useState} from 'react';
import {Button, Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Input from './Input';

const Exo2 = () => {
  const [listItems, setListItems] = useState([]); // initialise un tableau pour stocker les articles
  const [isInputVisible, setInputVisible] = useState(false); // initialisé a false : on masque l'input lorsqu'on ajoute un article

  const ajouterArticle = article => {
    setListItems([...listItems, article]); // spread opérator , on copie le tableau
    setInputVisible(false); // Masque l'input après avoir ajouté un article
  };

  const supprimerArticle = index => {
    const newList = [...listItems];
    newList.splice(index, 1); // Supprime un article à l'index spécifié
    setListItems(newList); // Met à jour la liste d'articles
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitre}>Ma liste de course</Text>
        {listItems.length === 0 ? ( // Condition ternaire : si la taille du tableau est strictement égal a 0, alors afficher le texte ci-dessous
          <Text>Aucun article dans votre liste de courses.</Text>
        ) : (
          // sinon, affichier le talbeau listItems
          <FlatList
            data={listItems}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => supprimerArticle(index)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      {isInputVisible ? ( // mettre l'input à false
        <Input
          onAddItem={ajouterArticle}
          onCancel={() => setInputVisible(false)}
        />
      ) : (
        // sinon, le mettre à true
        <View style={styles.footer}>
          <Button
            title="Ajouter article"
            onPress={() => setInputVisible(true)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textTitre: {
    fontSize: 30,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  itemText: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
    backgroundColor: '#6200EE',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default Exo2;
