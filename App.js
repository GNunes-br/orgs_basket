import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import BasketPage from './src/pages/Basket';

import { basketMock } from './src/mocks'
import { useCallback, useEffect } from 'react';

export default function App() {
  const [ loadedFonts ] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  useEffect(() => {
    async function prepare(){
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error)
      }
    }

    prepare();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if(loadedFonts){
      await SplashScreen.hideAsync()
    }
  }, [loadedFonts])


  if(!loadedFonts){
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />
      <BasketPage { ...basketMock }/>
    </SafeAreaView>
  );
}