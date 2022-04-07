import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Dashboard } from './src/screens/Dashboard'; 
import theme from './src/global/styles/theme';
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';

import { Routes } from './src/routes';
import { AppRoutes } from './src/routes/app.routes';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { SignIn } from './src/screens/SignIn';
import { AuthProvider, useAuth } from './src/hooks/auth';



export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const {userStorageLoading} = useAuth();

  if(!fontLoaded || userStorageLoading){
    return <AppLoading/>
  }  
  return (
    <GestureHandlerRootView style= {{flex: 1}}>
    <ThemeProvider theme={theme}>

      <StatusBar barStyle="light-content" />

      <AuthProvider>
        <Routes />     
      </AuthProvider>


    </ThemeProvider>
    </GestureHandlerRootView>
 
  );
}


