import { Modal, View } from 'react-native';
import ClosingIcon from '../ClosingIcon/ClosingIcon';
import PressableButton from '../PressableButton/PressableButton';
import { styles } from './PaymentItemOptionsModalStyles';

interface PaymentItemOptionsModalProps {
  visibilityChange: (change: boolean) => void;
  removePayment: () => void;
  editPayment: () => void;
}

export default function PaymentItemOptionsModal(
  props: PaymentItemOptionsModalProps,
) {
  return (
    <Modal animationType="slide" presentationStyle="pageSheet">
      <View style={styles.container}>
        <ClosingIcon visibilityChange={props.visibilityChange} />
        <View style={styles.buttonContainer}>
          <PressableButton text="Edit" onPress={props.editPayment} />
          <PressableButton text="Remove" onPress={props.removePayment} />
        </View>
      </View>
    </Modal>
  );
}
