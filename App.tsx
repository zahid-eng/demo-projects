/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Provider as StoreProvider} from 'react-redux';

import {Provider as PaperProvider} from 'react-native-paper';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {store} from './redux/Store';
import Counter from './src/screens/counter';
import Signup from './src/screens/signup';
import Home from './src/screens/Home';
import Customtab from './src/components/customtab';
import DateTimeModal from './src/components/dateTimeModal';
import Condional_Rendering from './src/components/condional_Rendering';
import RichText from './src/components/RichText';
import RichTextScreen from './src/screens/richTextScreen';
import JellyScroll from './src/screens/jellyScroll';
import ItemAnimated from './src/itemAnimated';
import BottomSheetMOdal from './src/components/bottomSheetModal';
import AnimatedScreen from './src/screens/animatedScreen';
import AnimatedScreen2 from './src/screens/animatedScreen2';
import SpeechToText from './src/components/speechToText';
import ImagetoText from './src/components/imageTotext';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <ImagetoText />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: 'blue',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
