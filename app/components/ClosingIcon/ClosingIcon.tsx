import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { styles } from './ClosingIconStyles';

interface ClosingIconProps {
  visibilityChange: (change: boolean) => void;
}

export default function ClosingIcon(props: ClosingIconProps) {
  return (
    <TouchableOpacity
      testID="ClosingIcon"
      style={styles.container}
      onPress={() => props.visibilityChange(false)}
    >
      <Ionicons name="close-sharp" size={40} color="black" />
    </TouchableOpacity>
  );
}
