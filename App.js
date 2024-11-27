import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import ProfileScreen from './Screens/ProfileScreen';
import BookScreen from './Screens/BookScreen';
import CircleImages from './components/circleimages';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='ChatScreen' component={ChatScreen} options={{headerShown: false}}/>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{headerShown: false}}/>
      <Stack.Screen name='BookScreen' component={BookScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
