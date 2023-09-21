import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import Payment from '../../logic/Payment';
import PaymentItem from './PaymentItem';

describe('PaymentItem', () => {
  test('correct payment value', () => {
    const payment = new Payment(100, '0');
    const { getByTestId } = render(
      <PaymentItem payment={payment} openModal={() => {}} />,
    );
    expect(
      getByTestId('PaymentItem-'.concat(payment.getKey())).props.children,
    ).toBe(100);
  });

  test('correct value parsed to openModel', () => {
    const modal = jest.fn();
    const payment = new Payment(100, '0');
    const { getByTestId } = render(
      <PaymentItem payment={payment} openModal={modal} />,
    );
    const item = getByTestId('PaymentItem-'.concat(payment.getKey()));
    fireEvent(item, 'press');
    expect(modal).toHaveBeenCalledWith(payment.getKey());
  });
});
