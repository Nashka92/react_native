import {Text} from 'react-native';

const ScreenB = ({navigation, route}) => {
  // On passe route en props pour récuperer la variable toto du screen C
  const value = route.params.value;
  console.log(route.params.qt)
  return (
    <>
      <Text>ScreenB</Text>
      <Text>Value: {value}</Text>
    </>
  );
};

export default ScreenB;
