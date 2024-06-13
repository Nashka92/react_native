import {useLayoutEffect} from 'react';
import {Button, Text, Linking} from 'react-native';

const DetailContact = ({route, navigation}) => {
  const contact = route.params.contact;

  function handleCallPress() {
    Linking.openURL(`tel:${contact.tel}`);
  }

  useLayoutEffect(() => {
    navigation.setOptions({title: contact.lastName});
  });

  return (
    <>
      <Text>{contact.id}</Text>
      <Text>{contact.lastName}</Text>
      <Text>{contact.firstName}</Text>
      <Text>{contact.tel}</Text>
      <Button title="Appeler" onPress={handleCallPress} />
    </>
  );
};

export default DetailContact;
