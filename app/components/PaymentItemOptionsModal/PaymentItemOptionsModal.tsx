import ClosingIcon from '../ClosingIcon/ClosingIcon';
import { Text, Modal, View, Pressable } from 'react-native';
import { styles } from './PaymentItemOptionsModalStyles';
import { border } from '../../utils/Border';

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
          <Pressable
            style={({ pressed }) => [
              styles.button,
              border.default,
              pressed && styles.pressedButton,
            ]}
          >
            <Text style={styles.text}>Edit</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              border.default,
              pressed && styles.pressedButton,
            ]}
          >
            <Text style={styles.text}>Delete</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
