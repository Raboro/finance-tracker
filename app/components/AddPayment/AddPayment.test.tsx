import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import AddPayment from './AddPayment';

describe('AddPayment', () => {
  test('renderNotNull', () => {
    const r = renderer.create(
      <AddPayment
        visibility={true}
        setAddPaymentVisibility={() => {}}
        updateBalance={() => {}}
      />,
    );
    expect(r).not.toBe(null);
  });

  test('update input with submit', () => {
    const updateBalance = jest.fn();
    const rend = render(
      <AddPayment
        visibility={true}
        setAddPaymentVisibility={() => {}}
        updateBalance={updateBalance}
      />,
    );
    const inputElement = rend.getByPlaceholderText('Payment');
    fireEvent.changeText(inputElement, '50');
    const submitButton = rend.getByText('Submit');
    fireEvent.press(submitButton);
    expect(updateBalance).toHaveBeenCalledWith(50);
  });

  test('invalid input should be NuN', () => {
    const updateBalance = jest.fn();
    const rend = render(
      <AddPayment
        visibility={true}
        setAddPaymentVisibility={() => {}}
        updateBalance={updateBalance}
      />,
    );
    const inputElement = rend.getByPlaceholderText('Payment');
    fireEvent.changeText(inputElement, '');
    const submitButton = rend.getByText('Submit');
    fireEvent.press(submitButton);
    expect(updateBalance).toHaveBeenCalledWith(NaN);
    fireEvent.changeText(inputElement, 'Text');
    fireEvent.press(submitButton);
    expect(updateBalance).toHaveBeenCalledWith(NaN);
  });
});