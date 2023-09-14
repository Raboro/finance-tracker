import { Modal, Pressable, TextInput, View, Text } from 'react-native';
import { styles } from './AddPaymentStyles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

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
          style={styles.paymentInput}
          placeholder="Payment"
          keyboardType="numeric"
          onChangeText={(text) => updateInput(parseFloat(text))}
        />

        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
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
