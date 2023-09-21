import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import PaymentHistory from "./PaymentHistory";
import Payment from "../../logic/Payment";

describe('PaymentHistory', () => {
  test('Payments render payments', () => {
    const rend = render(
        <PaymentHistory 
            payments={[new Payment(100, '0')]}
            removePayment={() => {}}
            editPayment={() => {}}
        />
    );
    expect(rend.getByTestId('PaymentHistory').props.children[4]).toBe(false);
    fireEvent(rend.getByTestId('ExpandIcon'), 'press');
    expect(rend.getByTestId('PaymentHistory').props.children[4]).not.toBe(false);
});
});