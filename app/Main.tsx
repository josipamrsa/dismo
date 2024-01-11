import { View, StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';

var style = require('./theme/styles')

export default function Main() {
  return (
    <View style={style.mainContainer.container}>

      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />

      <LoginScreen />
    </View>

  );
}

