import { Text } from 'react-native';
import Payment from '../../logic/Payment';
import { border } from '../../utils/Border';
import { styles } from './PaymentStyles';

export default function PaymentItem({ payment }: { payment: Payment }) {
  return (
    <Text style={[styles.container, border.default]}>{payment.value}</Text>
  );
}
