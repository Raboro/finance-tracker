import AsyncStorage from '@react-native-async-storage/async-storage';
import Payment from "./Payment";

export default class Storage {

    async generateKey(): Promise<string> {
        try {
            const keys = await AsyncStorage.getAllKeys();
            if (keys.length === 0) return '0';
            return (parseInt(keys[keys.length - 1]) + 1).toString();
        } catch (e) {
            console.error("ERROR" + e);
        }
        return '';
    }

    async insertPayment(payment: Payment): Promise<void> {
        try {
            await AsyncStorage.setItem(payment.getKey(), payment.toStorage());
        } catch (e) {
            console.error("ERROR:" + e);
        }
    }

    async getPayment(key: string): Promise<Payment | null> {
        try {
            const item = await AsyncStorage.getItem(key);
            if (item === null) return null;
            const parsed = JSON.parse(item);
            return new Payment(parsed.value, parsed.id);
        } catch (e) {
            console.error("ERROR" + e);
        }
        return null;
    }

    async updatePayment(payment: Payment): Promise<void> {
        try {
            await AsyncStorage.mergeItem(payment.getKey(), payment.toStorage());
        } catch (e) {
            console.error("ERROR" + e);
        }
    }

    async removePayment(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.error("ERROR" + e);
        }
    }
}