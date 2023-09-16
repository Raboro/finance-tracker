import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Payment from '../../logic/Payment';
import PaymentItem from '../Payment/PaymentItem';
import { styles } from './PaymentStyles';

export default function PaymentHistory({ payments }: { payments: Payment[] }) {
  const [listVisibility, setListVisibility] = useState(false);

  return (
    <View
      style={[styles.container, listVisibility ? {} : styles.containerSmall]}
    >
      <Text style={styles.heading} onPress={() => setListVisibility(!listVisibility)}>
        List of Payments
      </Text>

      <View style={[styles.expand, listVisibility ? styles.expandMore : {}]}>
        {listVisibility ? (
          <MaterialIcons
            name="expand-less"
            size={35}
            color="black"
            onPress={() => setListVisibility(false)}
          />
        ) : (
          <MaterialIcons
            name="expand-more"
            size={35}
            color="black"
            onPress={() => setListVisibility(true)}
          />
        )}
      </View>

      {listVisibility && (
        <FlatList
          data={payments}
          renderItem={({ item }) => <PaymentItem payment={item} />}
        />
      )}
    </View>
  );
}
