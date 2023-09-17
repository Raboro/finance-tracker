import ClosingIcon from '../ClosingIcon/ClosingIcon';
import { Modal, View } from 'react-native';
import { styles } from './PaymentItemOptionsModalStyles';
import PressableButton from '../PressableButton/PressableButton';

interface PaymentItemOptionsModalProps {
  visibilityChange: (change: boolean) => void;
}

export default function PaymentItemOptionsModal(
  props: PaymentItemOptionsModalProps,
) {
  return (
    <Modal animationType="slide" presentationStyle="pageSheet">
      <View style={styles.container}>
        <ClosingIcon visibilityChange={props.visibilityChange} />
        <View style={styles.buttonContainer}>
          <PressableButton text='Edit' onPress={() => {}}/>
          <PressableButton text='Delete' onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
}
