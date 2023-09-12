import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    iconContainer: {
        marginLeft: '80%',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});