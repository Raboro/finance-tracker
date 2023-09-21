import { Ionicons } from '@expo/vector-icons';
import { Alert, TouchableOpacity, View } from 'react-native';
import { styles } from './SettingsStyles';

export default function Settings() {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity testID='Settings' onPress={() => Alert.alert('Are not supported yet.')}>
        <Ionicons name="settings-sharp" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}
