import Payment from './Payment';
import Storage from './Storage';

export default class Balance {
  private storage: Storage = new Storage();
  private payments: Payment[] = [];
  private value: number = 0;

  async fetchPayments(): Promise<void> {
    this.payments = await this.storage.getAllPayments();
  }

  addPayments(...payments: number[]): void {
    payments.forEach(async (payment) => {
      const key = await this.storage.generateKey();
      const paymentObj = new Payment(payment, key);
      await this.storage.insertPayment(paymentObj);
      this.payments.push(paymentObj);
    });
  }

  async updatePayment(payment: Payment): Promise<void> {
    await this.storage.updatePayment(payment);
    for (let i = 0; i < this.payments.length; i++) {
      if (this.payments[i].getKey() === payment.getKey()) {
        this.payments[i] = payment;
        break;
      }
    }
  }

  async removePayment(id: string): Promise<void> {
    await this.storage.removePayment(id);
    this.payments = this.payments.filter((p) => p.getKey() !== id);
  }

  async recalculate(): Promise<number> {
    await this.fetchPayments();
    this.value = 0;
    this.payments.forEach((p) => (this.value += p.value));
    return this.value;
  }

  async getPayments(): Promise<Payment[]> {
    await this.fetchPayments();
    return this.payments;
  }
}
