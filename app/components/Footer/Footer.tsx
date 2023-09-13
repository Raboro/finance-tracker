import { TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "./FooterStyles";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
    return (
        <>
            <SafeAreaView style={styles.background} />
            <SafeAreaView style={styles.circle} />
            <TouchableOpacity style={[styles.centerButton]}>
                <Ionicons name="add-outline" size={60} color="black" />
            </TouchableOpacity>
        </>
    );
}
