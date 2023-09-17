import ClosingIcon from '../ClosingIcon/ClosingIcon';
import { Modal } from 'react-native';

interface PaymentItemOptionsModalProps {
  visibilityChange: (change: boolean) => void;
}

export default function PaymentItemOptionsModal(
  props: PaymentItemOptionsModalProps,
) {
  return (
    <Modal animationType="slide" presentationStyle="pageSheet">
      <ClosingIcon visibilityChange={props.visibilityChange} />
    </Modal>
  );
}
