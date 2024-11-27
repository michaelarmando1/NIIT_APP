import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const ChatScreen = () => {
  return (
    <View style= {styles.container}>
      <Text style= {styles.text}>Welcome to ChatScreen</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2F33',
  }, 

  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default ChatScreen