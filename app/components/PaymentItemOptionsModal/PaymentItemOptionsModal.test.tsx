import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import PaymentItemOptionsModal from './PaymentItemOptionsModal';

describe('PaymentItemOptionsModal', () => {
  test('Closing', () => {
    const visibilityChange = jest.fn();
    const rend = render(
      <PaymentItemOptionsModal
        visibilityChange={visibilityChange}
        removePayment={() => {}}
        editPayment={() => {}}
      />,
    );
    fireEvent(rend.getByTestId('ClosingIcon'), 'press');
    expect(visibilityChange).toBeCalledWith(false);
  });

  test('Edit', () => {
    const edit = jest.fn();
    const rend = render(
      <PaymentItemOptionsModal
        visibilityChange={() => {}}
        removePayment={() => {}}
        editPayment={edit}
      />,
    );
    fireEvent(rend.getByText('Edit'), 'press');
    expect(edit).toHaveBeenCalled();
  });

  test('Remove', () => {
    const remove = jest.fn();
    const rend = render(
      <PaymentItemOptionsModal
        visibilityChange={() => {}}
        removePayment={remove}
        editPayment={() => {}}
      />,
    );
    fireEvent(rend.getByText('Remove'), 'press');
    expect(remove).toHaveBeenCalled();
  });
});
