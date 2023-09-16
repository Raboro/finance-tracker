import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './AddPaymentStyles';
import { border } from '../../utils/Border';

interface AddPaymentProps {
  visibility: boolean;
  setAddPaymentVisibility: (visibility: boolean) => void;
  updateBalance: (balance: number) => void;
}

export default function AddPayment(props: AddPaymentProps) {
  const [input, updateInput] = useState(0);

  const resetModal = () => {
    props.setAddPaymentVisibility(false);
    updateInput(0);
  };

  const submit = () => {
    props.updateBalance(input);
    resetModal();
  };

  return (
    <Modal
      visible={props.visibility}
      onRequestClose={resetModal}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <Ionicons
            name="close-sharp"
            size={40}
            color="black"
            onPress={() => resetModal()}
          />
        </View>

        <TextInput
          style={[styles.paymentInput, border.default]}
          placeholder="Payment"
          keyboardType="numeric"
          onChangeText={(text) => updateInput(parseFloat(text))}
        />

        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            border.default,
            pressed && styles.pressedSubmitButton,
          ]}
          onPress={submit}
        >
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
