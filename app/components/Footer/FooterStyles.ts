import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    background: {
        backgroundColor: '#6495ed',
        height: Platform.OS === 'android' ? 70 : 100,
        width: '100%',
        bottom: Platform.OS === 'android' ? 0 : -40,
    },
    
    circle: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 80,
        width: '20%',
        borderRadius: 50,
        bottom: Platform.OS === 'android' ? 30 : 50,
    },

    centerButton: {
        backgroundColor: '#add8e6',
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 35 : 55,
        borderRadius: 50,
        width: '18%',
        height: 75,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 7,
        paddingLeft: 4
    }
});