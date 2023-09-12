import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './FooterStyles';

export default function Footer() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.leftButton]}>
        <Entypo name="home" size={40} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.centerButton]}>
        <Ionicons name="add-outline" size={60} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.rightButton]}>
        <MaterialIcons name="account-balance-wallet" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}
