import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const InitialScreen = ({navigation}) => {
  const persons = [
    {id: 1, lastName: 'Doe', firstName: 'John', tel: '+1234567890'},
    {id: 2, lastName: 'Smith', firstName: 'Will', tel: '+1234567890'},
    {id: 3, lastName: 'Johnson', firstName: 'Jack', tel: '+1234567890'},
    {id: 4, lastName: 'Brown', firstName: 'James', tel: '+1234567890'},
    {id: 5, lastName: 'Wilson', firstName: 'Annett', tel: '+1234567890'},
    {id: 6, lastName: 'Martinez', firstName: 'Sacha', tel: '+1234567890'},
    {id: 7, lastName: 'Taylor', firstName: 'Mary', tel: '+1234567890'},
    {id: 8, lastName: 'Anderson', firstName: 'Karen', tel: '+1234567890'},
  ];
  return (
    <View>
      <FlatList
        data={persons}
        renderItem={itemData => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailContact', {
                contact: itemData.item,
              })
            }>
            <Text style={styles.text}>{itemData.item.lastName}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default InitialScreen;
