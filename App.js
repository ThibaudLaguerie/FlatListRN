/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import DetailProfileScreen from './src/pages/DetailProfileScreen';


const stackNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Accueil'
    }
  },
  Detail: {
    screen: DetailProfileScreen,
  }
}, {
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(stackNav)

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <AppContainer/>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
