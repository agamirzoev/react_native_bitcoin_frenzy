import React, { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, AppRegistry,
} from 'react-native';

import Header from './components/Header/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  AppRegistry.registerComponent('main', () => App);

  return (
    <View style={styles.container}>
      <Header />
      <Text> Blah Blah Blah !</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default memo(App);
