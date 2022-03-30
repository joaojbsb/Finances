import React from 'react';
import { ThemeProvider } from 'styled-components';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Dashboard } from './src/screens/Dashboard'; 
import theme from './src/global/styles/theme';
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';



export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontLoaded){
    return <AppLoading/>
  }  
  return (
    <GestureHandlerRootView style= {{flex: 1}}>
    <ThemeProvider theme={theme}>
      <NavigationContainer>

        <AppRoutes />     

      </NavigationContainer>
    </ThemeProvider>
    </GestureHandlerRootView>
 
  );
}


