import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const App = () => {
  //Load fonts
  let [fontsLoaded] = useFonts({
    'Gilroy': require('./assets/fonts/Gilroy-ExtraBold.otf'),
    'Poppins': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;