import { FlatList, Text, View } from 'react-native';
import Payment from '../../logic/Payment';
import { styles } from './PaymentStyles';
import PaymentItem from '../Payment/PaymentItem';


export default function PaymentHistory({ payments }: { payments: Payment[] }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>List of Payments</Text>
            <FlatList
                data={payments}
                renderItem={({ item }) => <PaymentItem payment={item} />}
            />   
        </View>
    );
}