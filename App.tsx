import React from 'react';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.content}>
        <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          <Entypo name="home" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.centerButton]}>
          <Ionicons name="add-outline" size={60} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.rightButton]}>
          <MaterialIcons name="account-balance-wallet" size={40} color="black" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    justifyContent: 'center'
  },

  text: {
    textAlign: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 3,
    borderColor: 'black', 
    borderRadius: 0
  },

  leftButton: {
    flex: 1.5,
    paddingTop: 30,
    borderRightWidth: 0,
    borderTopLeftRadius: 30
  },

  rightButton: {
    flex: 1.5,
    paddingTop: 30,
    borderLeftWidth: 0,
    borderTopRightRadius: 30,
  },

  centerButton: {
    paddingBottom: 10,
    marginTop: 25,
    marginBottom: 20,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderTopWidth: 0,
  },
});
