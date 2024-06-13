import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import InitialScreen from './components/Exo4/InitialScreen';
import DetailContact from './components/Exo4/DetailContact';

// Package pour la navigation :
// npm i @react-navigation/native
// npm i react-native-screens react-native-safe-area-context
// npm i @react-navigation/native-stack

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* // écran initial au lancement de l'application */}
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen name="DetailContact" component={DetailContact} />
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
