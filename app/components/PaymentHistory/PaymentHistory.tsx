import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Payment from '../../logic/Payment';
import { border } from '../../utils/Border';
import ExpandIcon from '../ExpandIcon/ExpandIcon';
import PaymentItem from '../Payment/PaymentItem';
import { styles } from './PaymentStyles';

export default function PaymentHistory({ payments }: { payments: Payment[] }) {
  const [listVisibility, setListVisibility] = useState(false);

  return (
    <View
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

      {listVisibility && (
        <FlatList
          data={payments}
          keyExtractor={(item, index) => item.getKey() + index}
          renderItem={({ item, index }) => (
            <PaymentItem key={item.getKey() + index} payment={item} />
          )}
        />
      )}
    </View>
  );
}
