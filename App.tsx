import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Footer from './app/components/Footer/Footer';
import Balance from './app/components/Balance/Balance';
import Settings from './app/components/Settings/Settings';
import AddPayment from './app/components/AddPayment/AddPayment';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [addPaymentVisibility, setAddPaymentVisibility] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Settings />
      <Balance balance={balance} />

      <View style={styles.content}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>

      <AddPayment
        visibility={addPaymentVisibility}
        setAddPaymentVisibility={setAddPaymentVisibility}
        setBalance={setBalance}
      />

      <Footer setAddPaymentVisibility={setAddPaymentVisibility} />
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
