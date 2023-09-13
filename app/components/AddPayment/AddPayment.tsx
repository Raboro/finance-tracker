import { Modal, Pressable, TextInput, View, Text } from 'react-native';
import { styles } from './AddPaymentStyles';
import { Ionicons } from '@expo/vector-icons';

interface AddPaymentProps {
  visibility: boolean;
  setAddPaymentVisibility: (visibility: boolean) => void;
}

export default function AddPayment({
  visibility,
  setAddPaymentVisibility,
}: AddPaymentProps) {
  return (
    <Modal
      visible={visibility}
      onRequestClose={() => setAddPaymentVisibility(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <Ionicons
            name="close-sharp"
            size={40}
            color="black"
            onPress={() => setAddPaymentVisibility(false)}
            />
        </View>

          <TextInput 
            style={styles.paymentInput}
            placeholder='Payment'
            keyboardType='numeric'
          />

          <Pressable style={({ pressed }) => [styles.submitButton, pressed && styles.pressedSubmitButton]} >
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
      </View>
    </Modal>
  );
}
