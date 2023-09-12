import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomButtonsComponent from './app/components/ButtomButtons/ButtomButtonsComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.content}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>

      <BottomButtonsComponent />
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
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
  },
});
