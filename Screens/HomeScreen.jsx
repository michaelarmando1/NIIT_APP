import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleImages from '../components/circleimages'; // Ensure this path is correct
import { MaterialIcons } from '@expo/vector-icons';  // Expo vector icons
import { TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('home') //Default active tab is 'home'

  return (
    <View style={styles.container}>
      <View style={styles.storiescontainer}>
        <Text style={styles.textheader}>Stories</Text>
        <CircleImages />
      </View>

      <View style={styles.bottomNav}>
      <TouchableOpacity
          onPress={() => {
            setActiveTab('home');
            navigation.navigate('HomeScreen');
        }}>
          <MaterialIcons 
            name="home" 
            size={30} 
            color={activeTab === 'home' ? 'purple' : 'white'}  // Change to purple if active
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveTab('chat');
            navigation.navigate('ChatScreen')
          }}
        >
          <MaterialIcons 
            name="chat" 
            size={30} 
            color={activeTab === 'chat' ? 'purple' : 'white'}  // Change to purple if active
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveTab('profile');
            navigation.navigate('ProfileScreen');
          }}
        >
          <MaterialIcons 
            name="account-circle" 
            size={30} 
            color={activeTab === 'profile' ? 'purple' : 'white'}  // Change to purple if active
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveTab('book');
            navigation.navigate('BookScreen');
          }}
        >
          <MaterialIcons 
            name="book" 
            size={30} 
            color={activeTab === 'book' ? 'purple' : 'white'}  // Change to purple if active
          />
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2F33',
  },

  storiescontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 450, // Adjust spacing for the bottom text
  },

  textheader: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    top: 100,
    right: 110 
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20, // Added space above the text
  },

  bottomNav: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
});

export default HomeScreen;
