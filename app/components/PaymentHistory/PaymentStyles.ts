import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/ColorStyles";

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        borderWidth: 3,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.tertiary,
        flex: 1,
        justifyContent: 'center',
        marginBottom: '30%',
        marginTop: '15%',
        borderRadius: 15
    },

    heading: {
        textAlign: 'center', 
        marginVertical: '5%',
        fontWeight: 'bold'
    }
});