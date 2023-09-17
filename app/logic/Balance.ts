import Payment from "./Payment";

export default class Balance {
    private payments: Payment[] = [];
    private value: number = 0;

    addPayments(...payments: Payment[]): void {
        payments.forEach(p => this.payments.push(p));
    }

    updatePayment(payment: Payment): void {
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].getKey() === payment.getKey()) {
                this.payments[i] = payment;
                break;
            }
        }
    }

    removePayment(id: string): void {
        this.payments = this.payments.filter(p => p.getKey() !== id);
    }

    recalculate(): number {
        this.value = 0;
        this.payments.forEach(p => this.value += p.value);
        return this.value;
    }

}