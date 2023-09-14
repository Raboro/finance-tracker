import { Modal, Pressable, TextInput, View, Text } from 'react-native';
import { styles } from './AddPaymentStyles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface AddPaymentProps {
  visibility: boolean;
  setAddPaymentVisibility: (visibility: boolean) => void;
  setBalance: (balance: number) => void;
}

export default function AddPayment({
  visibility,
  setAddPaymentVisibility,
  setBalance
}: AddPaymentProps) {
  const [input, updateInput] = useState(0);

  const submit = () => {
    setAddPaymentVisibility(false);
    setBalance(input.toString() === 'NaN' ? 0 : input);
  };

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
