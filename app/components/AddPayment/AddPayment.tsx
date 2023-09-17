import { useState } from 'react';
import { Modal, TextInput, View } from 'react-native';
import { border } from '../../utils/Border';
import { styles } from './AddPaymentStyles';
import ClosingIcon from '../ClosingIcon/ClosingIcon';
import PressableButton from '../PressableButton/PressableButton';

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
          keyboardType="numeric"
          onChangeText={(text) => updateInput(parseFloat(text))}
        />

        <PressableButton text='Submit' onPress={submit} style={{marginTop: '180%'}}/>
      </View>
    </Modal>
  );
}
