import { useState } from 'react';
import Main from './app/Main';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
  return Font.loadAsync({
    'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'roboto-condensed': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    'roboto-condensed-light': require('./assets/fonts/RobotoCondensed-Light.ttf')
  })
} 


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return <AppLoading
      startAsync={fetchFont}
      onFinish={() => setFontsLoaded(true)}
      onError={(err) => console.log(err)} />
  } 

  return (
    <Main />
  );
}





//<Main />