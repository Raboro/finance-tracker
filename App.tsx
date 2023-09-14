import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Footer from './app/components/Footer/Footer';
import Balance from './app/components/Balance/Balance';
import Settings from './app/components/Settings/Settings';
import AddPayment from './app/components/AddPayment/AddPayment';
import Payment from './app/logic/Payment';
import PaymentHistory from './app/components/PaymentHistory/PaymentHistory';

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
