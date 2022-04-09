/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { WebView } from 'react-native-webview';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App: () => Node = () => {
 
  return (
    <WebView
    source={{ uri: 'https://online-pharmacy-project.herokuapp.com/' }}
    style={{ marginTop: 20 }}
  />
  );
};


export default App;
