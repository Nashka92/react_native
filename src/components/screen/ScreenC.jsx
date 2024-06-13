import {View, Button, Text} from 'react-native';

const ScreenC = ({navigation}) => {
  return (
    <View>
      <Text>Screen C</Text>
      <Text>On va rajouter un bouton vers la page ScreenA</Text>
      <Button
        title="Go to Screen A"
        onPress={() => navigation.navigate('EcranA')}
      />
      <Text>
        On va rajouter un bouton vers la page de screenB avec un params value
        qui contient tata
      </Text>
      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate('EcranB', {value: 'Tata'})}
      />
            <Text>
        On va rajouter un bouton vers la page de screenB avec un params value
        qui contient toto
      </Text>
      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate('EcranB', {value: 'Toto', qt: 25})}
      />
    </View>
  );
};

export default ScreenC;
