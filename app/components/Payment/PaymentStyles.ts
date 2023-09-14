import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/ColorStyles";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.tertiary,
        margin: '3%',
        borderRadius: 10,
        textAlign: 'center',
        marginHorizontal: '20%',
        paddingTop: '2%'
    }
});