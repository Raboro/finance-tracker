import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AddPayment from './app/components/AddPayment/AddPayment';
import Balance from './app/components/Balance/Balance';
import Footer from './app/components/Footer/Footer';
import PaymentHistory from './app/components/PaymentHistory/PaymentHistory';
import Settings from './app/components/Settings/Settings';
import Payment from './app/logic/Payment';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [addPaymentVisibility, setAddPaymentVisibility] = useState(false);
  const [payments, updatePayments] = useState<Payment[]>([]);

  const updateBalance = (update: number) => {
    if (noUpdateNeeded(update)) return;
    updatePayments([...payments, new Payment(update)]);
    setBalance(balance + update);
  };

  const noUpdateNeeded = (update: number) => {
    return update.toString() === 'NaN' || update === 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Settings />
      <Balance balance={balance} />

      <PaymentHistory payments={payments} />

      <AddPayment
        visibility={addPaymentVisibility}
        setAddPaymentVisibility={setAddPaymentVisibility}
        updateBalance={updateBalance}
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
});
