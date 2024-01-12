import { useCallback } from 'react';
import { View } from 'react-native';

import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

import Main from './app/Main';

var style = require('./app/theme/styles')

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
    'raleway-extralight': require('./assets/fonts/Raleway-ExtraLight.ttf'),
    'raleway-semibold': require('./assets/fonts/Raleway-SemiBold.ttf'),
    'roboto-condensed': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'roboto-condensed-light': require('./assets/fonts/RobotoCondensed-Light.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontsError])

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (
    <View style={style.appContainer} onLayout={onLayoutRootView}>
      <Main />
    </View>

  );
}





//<Main />