import React from 'react';
import {Dimensions, SafeAreaView, useColorScheme} from 'react-native';

import Constants from './utils/constants';
import {Provider} from 'react-redux';
import store from './redux/store';
import NavStack from './router';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  let ScreenHeight = Dimensions.get('window').height;

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Constants.colors.darkMode.appBG
      : Constants.colors.lightMode.appBG,
    height: ScreenHeight,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <NavStack />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
