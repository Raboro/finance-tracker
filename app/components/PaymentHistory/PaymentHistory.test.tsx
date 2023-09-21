import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import Payment from '../../logic/Payment';
import PaymentHistory from './PaymentHistory';

describe('PaymentHistory', () => {
  test('Payments render payments with Icon', () => {
    const rend = render(
      <PaymentHistory
        payments={[new Payment(100, '0')]}
        removePayment={() => {}}
        editPayment={() => {}}
      />,
    );
    expect(rend.getByTestId('PaymentHistory').props.children[4]).toBe(false);
    fireEvent(rend.getByTestId('ExpandIcon'), 'press');
    expect(rend.getByTestId('PaymentHistory').props.children[4]).not.toBe(
      false,
    );
  });

  test('Payments render payments with Text', () => {
    const rend = render(
        <PaymentHistory
          payments={[new Payment(100, '0')]}
          removePayment={() => {}}
          editPayment={() => {}}
        />,
      );
    expect(rend.getByTestId('PaymentHistory').props.children[4]).toBe(false);
    fireEvent(rend.getByText('List of Payments'), 'press');
    expect(rend.getByTestId('PaymentHistory').props.children[4]).not.toBe(
      false,
    ); 
  });

  test('Open Modal', () => {
    const rend = render(
        <PaymentHistory
          payments={[new Payment(100, '0')]}
          removePayment={() => {}}
          editPayment={() => {}}
        />,
    );
    expect(rend.getByTestId('PaymentHistory').props.children[2]).toBe(false);
    fireEvent(rend.getByText('List of Payments'), 'press');
    fireEvent(rend.getByTestId('PaymentItem-0'), 'press');
    expect(rend.getByTestId('PaymentHistory').props.children[2]).not.toBe(false);
  });

  test('Remove', () => {
    const remove = jest.fn();
    const rend = render(
        <PaymentHistory
          payments={[new Payment(100, '0')]}
          removePayment={remove}
          editPayment={() => {}}
        />,
    );
    fireEvent(rend.getByText('List of Payments'), 'press');
    fireEvent(rend.getByTestId('PaymentItem-0'), 'press');
    fireEvent(rend.getByText('Remove'), 'press');
    expect(remove).toHaveBeenCalledWith('0');
  })

  test('Edit', () => {
    const edit = jest.fn();
    const rend = render(
        <PaymentHistory
          payments={[new Payment(100, '0')]}
          removePayment={() => {}}
          editPayment={edit}
        />,
    );
    fireEvent(rend.getByText('List of Payments'), 'press');
    fireEvent(rend.getByTestId('PaymentItem-0'), 'press');
    fireEvent(rend.getByText('Edit'), 'press');
    fireEvent(rend.getByText('Submit'), 'press');
    expect(edit).toHaveBeenCalled();
  })
});
