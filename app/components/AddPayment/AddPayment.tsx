import { useState } from 'react';
import { Modal, Platform, TextInput, View } from 'react-native';
import { border } from '../../utils/Border';
import ClosingIcon from '../ClosingIcon/ClosingIcon';
import PressableButton from '../PressableButton/PressableButton';
import { styles } from './AddPaymentStyles';

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
        <ClosingIcon visibilityChange={resetModal} />

        <TextInput
          style={[styles.paymentInput, border.default]}
          placeholder="Payment"
          keyboardType={Platform.OS === "android" ? "number-pad" : "numbers-and-punctuation"}
          onChangeText={(text) => updateInput(parseFloat(text))}
        />

        <PressableButton
          text="Submit"
          onPress={submit}
          style={{ marginTop: '180%' }}
        />
      </View>
    </Modal>
  );
}
