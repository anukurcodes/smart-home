/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

// import AnimatedSwitch from './components/SwitchWrapper';
import Home from './screens/Home';
import Constants from './utils/constants';

/* function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Hello {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
} */

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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode
              ? Constants.colors.darkMode.appBG
              : Constants.colors.lightMode.appBG,
          }}>
          {/* <Text>h:</Text>
          <AnimatedSwitch />
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
          <Home />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
