import { Text } from 'react-native';
import Payment from '../../logic/Payment';
import { border } from '../../utils/Border';
import { styles } from './PaymentStyles';

interface PaymentItemProps {
  payment: Payment;
  openModal: (paymentId: string) => void;
}

export default function PaymentItem(props: Readonly<PaymentItemProps>) {
  return (
    <Text
      testID={'PaymentItem-'.concat(props.payment.getKey())}
      style={[styles.container, border.default]}
      onPress={() => props.openModal(props.payment.getKey())}
    >
      {props.payment.value}
    </Text>
  );
}
