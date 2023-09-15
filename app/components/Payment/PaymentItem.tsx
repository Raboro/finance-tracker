import { Text } from 'react-native';
import Payment from '../../logic/Payment';
import { styles } from './PaymentStyles';

export default function PaymentItem({ payment }: { payment: Payment }) {
  return <Text style={styles.container}>{payment.value}</Text>;
}
