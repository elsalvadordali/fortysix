import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, AppState } from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b1c22',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold';
  },
});

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
  <Text>This is</Text>

    <Text style={{ fontSize: '48', color: '#fff'}}>46</Text>
    <Button onPress={() => navigation.navigate('Help')} title="How it works"
    />
    <Button onPress={() => navigation.navigate('Details')} title="Skip"
    />
  </View>
);

const DetailsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.container}>Details Screen</Text>
  </View>
);
const HelpScreen = ({navigation}) => (
  <View style={styles.container}>
  <Text style={styles.container, styles.bold}>How does it work?</Text>
  <Text style={styles.container}>It's easy! When you're not using your phone (ie, when your phone screen is off) you earn $1 per second*. When you use your phone you quickly lose that money. The object of the game is to become a millionaire.</Text>
    <Button onPress={() => navigation.navigate('Details')} title="See your earnings"
    />

  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
  },
  Help: {
    screen: HelpScreen,
  },
});

export default RootNavigator;
