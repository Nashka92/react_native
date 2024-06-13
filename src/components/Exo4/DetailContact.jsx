import {useLayoutEffect} from 'react';
import {Button, Text, Linking} from 'react-native';

const DetailContact = ({route, navigation}) => {
  const id = route.params.id;
  const lastName = route.params.lastName;
  const firstName = route.params.firstName;
  const tel = route.params.tel;

  function handleCallPress() {
    Linking.openURL('tel:' + tel);
  }

  useLayoutEffect(() => {
    navigation.setOptions({title: lastName});
  });

  return (
    <>
      <Text>{id}</Text>
      <Text>{lastName}</Text>
      <Text>{firstName}</Text>
      <Text>{tel}</Text>
      <Button title="Appeler" onPress={handleCallPress} />
    </>
  );
};

export default DetailContact;
