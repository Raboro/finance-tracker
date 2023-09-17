import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { styles } from './ClosingIconStyles';

interface ClosingIconProps {
  visibilityChange: (change: boolean) => void;
}

export default function ClosingIcon(props: ClosingIconProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="close-sharp"
        size={40}
        color="black"
        onPress={() => props.visibilityChange(false)}
      />
    </View>
  );
}
