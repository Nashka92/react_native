import {useLayoutEffect} from 'react';
import {Linking, Text, Button} from 'react-native';

const ScreenA = ({navigation}) => {
  function handleCallPress() {
    Linking.openURL('tel:911');
  }
  //quasi un équivalent de useEffect classique
  // Il a pour subtilité de se déclencher AVANT le rendu du composant
  useLayoutEffect(() => {
    navigation.setOptions({title: 'Call 911'});
  });
  return (
    <>
      <Text>ScreenA</Text>
      <Button title="call 911" onPress={handleCallPress} />
    </>
  );
};

export default ScreenA;
