import { Ionicons } from "@expo/vector-icons";
import { Modal, View } from "react-native";
import { styles } from "./PaymentItemOptionsModalStyles";

interface PaymentItemOptionsModalProps {
    visibilityChange: (change: boolean) => void;
}

export default function PaymentItemOptionsModal(props: PaymentItemOptionsModalProps) {
    return (
        <Modal>
            <View style={styles.closeIcon}>
                <Ionicons
                    name="close-sharp"
                    size={40}
                    color="black"
                    onPress={() => props.visibilityChange(false)}
                />
            </View>
        </Modal>
    );
}