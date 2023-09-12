import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    balanceContainer: {
        justifyContent: "center",
        alignContent: "center",
        marginTop: '30%'
    },

    positiveBalance: {
        color: 'green'
    },

    nullBalance: {
        color: 'black'
    },

    negativeBalance: {
        color: 'red'
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});