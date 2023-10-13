import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { border } from '../../utils/Border';
import { styles } from './PressableButtonStyling';

interface PressableButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export default function PressableButton(props: PressableButtonProps) {
  return (
    <Pressable
      testID="PressableButton"
      style={({ pressed }) => [
        styles.button,
        border.default,
        pressed && styles.pressedButton,
        props.style ?? {},
      ]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}
