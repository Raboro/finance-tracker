import { Text } from 'react-native';
import Payment from '../../logic/Payment';
import { styles } from './PaymentStyles';
import { border } from '../../utils/Border';

export default function PaymentItem({ payment }: { payment: Payment }) {
  return <Text style={[styles.container, border.default]}>{payment.value}</Text>;
}
