import { describe, expect, test } from "@jest/globals";
import Payment from "./Payment";

describe('Payment', () => {
  test('toStorage', () => {
    const payment = new Payment(100, '0');
    expect(payment.toStorage()).toBe("{\"id\":\"0\",\"value\":100}");
  });
});