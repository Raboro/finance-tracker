import { Text, View } from 'react-native';
import { styles } from './BalanceStyles';

interface BalanceProps {
  balance: number;
}

export default function BalanceUI(props: Readonly<BalanceProps>) {
  const determineTextStyling = () => {
    if (props.balance > 0) return styles.positiveBalance;
    return props.balance === 0 ? styles.nullBalance : styles.negativeBalance;
  };

  return (
    <View style={styles.balanceContainer}>
      <Text style={[determineTextStyling(), styles.text]}>{props.balance}</Text>
    </View>
  );
}
