import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './FooterStyles';

interface FooterProps {
  setAddPaymentVisibility: (visibility: boolean) => void;
}

export default function Footer(props: FooterProps) {
  return (
    <>
      <SafeAreaView style={styles.background} />
      <SafeAreaView style={styles.circle} />
      <TouchableOpacity
        style={[styles.centerButton]}
        onPress={() => props.setAddPaymentVisibility(true)}
      >
        <Ionicons name="add-outline" size={60} color="black" />
      </TouchableOpacity>
    </>
  );
}
