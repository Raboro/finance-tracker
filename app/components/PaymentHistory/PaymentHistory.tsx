import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Payment from '../../logic/Payment';
import { border } from '../../utils/Border';
import AddPayment from '../AddPayment/AddPayment';
import ExpandIcon from '../ExpandIcon/ExpandIcon';
import PaymentItem from '../Payment/PaymentItem';
import PaymentItemOptionsModal from '../PaymentItemOptionsModal/PaymentItemOptionsModal';
import { styles } from './PaymentStyles';

interface PaymentHistoryProps {
  payments: Payment[];
  removePayment: (id: string) => void;
  editPayment: (update: number, id: string) => void;
}

export default function PaymentHistory(props: Readonly<PaymentHistoryProps>) {
  const [listVisibility, setListVisibility] = useState(false);
  const [optionsModalVisibility, setOptionsModalVisibility] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [editVisibility, setEditVisibility] = useState(false);

  const openModal = (paymentId: string) => {
    setSelectedPayment(paymentId);
    setOptionsModalVisibility(true);
  };

  const editPayment = () => {
    setEditVisibility(true);
    setOptionsModalVisibility(false);
  };

  return (
    <View
      testID="PaymentHistory"
      style={[
        styles.container,
        border.default,
        listVisibility ? {} : styles.containerSmall,
      ]}
    >
      <Text
        style={[styles.heading, listVisibility ? styles.headingMore : {}]}
        onPress={() => setListVisibility(!listVisibility)}
      >
        List of Payments
      </Text>

      <View style={[styles.expand, listVisibility ? styles.expandMore : {}]}>
        <ExpandIcon expand={listVisibility} changeState={setListVisibility} />
      </View>

      {optionsModalVisibility && (
        <PaymentItemOptionsModal
          visibilityChange={setOptionsModalVisibility}
          editPayment={editPayment}
          removePayment={() => props.removePayment(selectedPayment)}
        />
      )}

      {editVisibility && (
        <AddPayment
          visibility={editVisibility}
          setAddPaymentVisibility={setEditVisibility}
          updateBalance={(update: number) =>
            props.editPayment(update, selectedPayment)
          }
        />
      )}

      {listVisibility && (
        <FlatList
          data={props.payments}
          keyExtractor={(item, index) => item.getKey() + index}
          renderItem={({ item, index }) => (
            <PaymentItem
              key={item.getKey() + index}
              payment={item}
              openModal={() => openModal(item.getKey())}
            />
          )}
        />
      )}
    </View>
  );
}
