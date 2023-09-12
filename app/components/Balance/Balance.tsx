import { View, Text } from 'react-native';
import { styles } from './BalanceStyles';

interface BalanceProps {
    balance: number
}

export default function Balance({ balance }: BalanceProps) {

    const determineTextStyling = () => {
        if (balance > 0) return styles.positiveBalance;
        return (balance === 0) ? styles.nullBalance : styles.negativeBalance;
    };

    return (
        <View style={styles.balanceContainer}>
            <Text style={[determineTextStyling(), styles.text]}>{balance}</Text>
        </View>
    );
}