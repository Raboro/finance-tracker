import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import AddPayment from './app/components/AddPayment/AddPayment';
import BalanceUI from './app/components/Balance/Balance';
import Footer from './app/components/Footer/Footer';
import LoadingCircle from './app/components/Loading/Loading';
import PaymentHistory from './app/components/PaymentHistory/PaymentHistory';
import Settings from './app/components/Settings/Settings';
import Balance from './app/logic/Balance';
import Payment from './app/logic/Payment';
import { appStyles } from './app/utils/AppStyles';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [balanceObj, setBalanceObj] = useState<Balance | null>(null);
  const [balance, setBalance] = useState(0);
  const [addPaymentVisibility, setAddPaymentVisibility] = useState(false);
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    reloadApp();
  }, []);

  const reloadApp = async () => {
    setIsLoading(true);
    const newBalanceObj = new Balance();
    await newBalanceObj.fetchPayments();
    setBalanceObj(newBalanceObj);
    setBalance(await newBalanceObj.recalculate());
    setPayments(await newBalanceObj.getPayments());
    setIsLoading(false);
  };

  const updateBalance = (update: number) => {
    if (noUpdateNeeded(update)) return;
    const updatedBalanceObj = balanceObj ?? new Balance();
    updatedBalanceObj
      .addPayment(update)
      .then(() => updateApp(updatedBalanceObj))
      .catch((error) => console.error('Error adding payments:', error));
  };

  const noUpdateNeeded = (update: number) => {
    if (isNaN(update)) Alert.alert('Invalid Input - not a number!');
    return isNaN(update) || update === 0;
  };

  const updateApp = (updatedBalanceObj: Balance) => {
    updatedBalanceObj
      .getPayments()
      .then((updatedPayments: Payment[]) => {
        setPayments(updatedPayments);
        updatedBalanceObj
          .recalculate()
          .then(() => reloadApp())
          .catch((error) => console.error('Error updating balance:', error));
      })
      .catch((error) => console.error('Error updating payments:', error));
  };

  const removePayment = (id: string) => {
    const updatedBalanceObj = balanceObj ?? new Balance();
    updatedBalanceObj
      .removePayment(id)
      .then(() => updateApp(updatedBalanceObj))
      .catch((error) => console.error('Error removing payments:', error));
  };

  const editPayment = (update: number, id: string) => {
    if (noUpdateNeeded(update) && update !== 0) return;
    if (update === 0) {
      removePayment(id);
      return;
    }
    const updatedBalanceObj = balanceObj ?? new Balance();
    updatedBalanceObj
      .updatePayment(new Payment(update, id))
      .then(() => updateApp(updatedBalanceObj))
      .catch((error) => console.error('Error editing payment' + error));
  };

  return (
    <SafeAreaView style={appStyles.container}>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          <StatusBar style="auto" />
          <Settings />
          <BalanceUI balance={balance} />
          <PaymentHistory
            payments={payments}
            removePayment={removePayment}
            editPayment={editPayment}
          />
          <AddPayment
            visibility={addPaymentVisibility}
            setAddPaymentVisibility={setAddPaymentVisibility}
            updateBalance={updateBalance}
          />
          <Footer setAddPaymentVisibility={setAddPaymentVisibility} />
        </>
      )}
    </SafeAreaView>
  );
}
