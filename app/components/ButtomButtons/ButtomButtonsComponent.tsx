import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { buttonStyles } from './ButtonStyles';

export default function BottomButtonsComponent() {
    return (
        <View style={buttonStyles.buttonContainer}>
        <TouchableOpacity style={[buttonStyles.button, buttonStyles.leftButton]}>
          <Entypo name="home" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={[buttonStyles.button, buttonStyles.centerButton]}>
          <Ionicons name="add-outline" size={60} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={[buttonStyles.button, buttonStyles.rightButton]}>
          <MaterialIcons name="account-balance-wallet" size={40} color="black" />
        </TouchableOpacity>
      </View>
    );
}