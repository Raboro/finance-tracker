import AsyncStorage from '@react-native-async-storage/async-storage';
import Payment from './Payment';

export default class Storage {
  async getAllPayments(): Promise<Payment[]> {
    try {
      const items = await AsyncStorage.multiGet(
        await AsyncStorage.getAllKeys(),
      );
      if (items.length === 0) return [];
      const payments: Payment[] = [];
      for (const item of items) {
        const parsed = JSON.parse(item[1]?.toString() ?? '');
        payments.push(new Payment(parsed.value, parsed.id));
      }
      return payments;
    } catch (e) {
      console.error('ERROR' + e);
    }
    return [];
  }

  async generateKey(): Promise<string> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.length === 0) return '0';
      return (parseInt(keys[keys.length - 1]) + 1).toString();
    } catch (e) {
      console.error('ERROR' + e);
    }
    return '';
  }

  async insertPayment(payment: Payment): Promise<void> {
    try {
      await AsyncStorage.setItem(payment.getKey(), payment.toStorage());
    } catch (e) {
      console.error('ERROR:' + e);
    }
  }

  async updatePayment(payment: Payment): Promise<void> {
    try {
      await AsyncStorage.mergeItem(payment.getKey(), payment.toStorage());
    } catch (e) {
      console.error('ERROR' + e);
    }
  }

  async removePayment(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('ERROR' + e);
    }
  }
}
