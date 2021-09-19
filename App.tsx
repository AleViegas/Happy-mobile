import React from 'react';

import { useFonts } from 'expo-font'
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import Routes from "./src/routes"

export default function App() {
  // carregamento das fonts, a função usefonts retorna o status do carregamento
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  // caso as fonts nao tenham carregado
  if (!fontsLoaded) {
    return null
  }


  return (
    <Routes />
  );
}