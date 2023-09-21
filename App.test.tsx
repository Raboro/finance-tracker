import { beforeEach, describe, expect, test } from '@jest/globals';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  beforeEach(async () => {
    const r = await waitFor(() => render(<App />));
    fireEvent(r.getByText('List of Payments'), 'press');
    while (
      r.getByTestId('PaymentHistory').props.children[4].props.data.length !== 0
    ) {
      const id =
        r.getByTestId('PaymentHistory').props.children[4].props.data[0].id;
      fireEvent(r.getByTestId('PaymentItem-' + id), 'press');
      await waitFor(() => fireEvent(r.getByText('Remove'), 'press'));
      fireEvent(r.getByText('List of Payments'), 'press');
    }
  });

  test('zero balance on startup', async () => {
    const { getByText } = await waitFor(() => render(<App />));
    expect(getByText('0').props.children).toBe(0);
    expect(getByText('0').props.style).toMatchObject([
      { color: 'black' },
      { fontSize: 30, fontWeight: 'bold' },
    ]);
  });

  test('update Balance positive then negative', async () => {
    const rend = await waitFor(() => render(<App />));
    fireEvent(rend.getByTestId('FooterTouchable'), 'press');
    const inputElement = rend.getByPlaceholderText('Payment');
    fireEvent.changeText(inputElement, '50');
    await waitFor(() => fireEvent(rend.getByText('Submit'), 'press'));
    expect(rend.getByText('50').props.children).toBe(50);
    expect(rend.getByText('50').props.style).toMatchObject([
      { color: 'green' },
      { fontSize: 30, fontWeight: 'bold' },
    ]);

    fireEvent(rend.getByTestId('FooterTouchable'), 'press');
    fireEvent.changeText(rend.getByPlaceholderText('Payment'), '-150');
    await waitFor(() => fireEvent(rend.getByText('Submit'), 'press'));
    expect(rend.getByText('-100').props.children).toBe(-100);
    expect(rend.getByText('-100').props.style).toMatchObject([
      { color: 'red' },
      { fontSize: 30, fontWeight: 'bold' },
    ]);
  });

  test('delete payment', async () => {
    const rend = await waitFor(() => render(<App />));
    fireEvent(rend.getByTestId('FooterTouchable'), 'press');
    const inputElement = rend.getByPlaceholderText('Payment');
    fireEvent.changeText(inputElement, '50');
    await waitFor(() => fireEvent(rend.getByText('Submit'), 'press'));
    fireEvent(rend.getByText('List of Payments'), 'press');
    expect(rend.getByTestId('PaymentItem-0').props.children).toBe(50);
    expect(
      rend.getByTestId('PaymentHistory').props.children[4].props.data.length,
    ).toBe(1);

    fireEvent(rend.getByTestId('PaymentItem-0'), 'press');
    await waitFor(() => fireEvent(rend.getByText('Remove'), 'press'));
    fireEvent(rend.getByText('List of Payments'), 'press');
    expect(
      rend.getByTestId('PaymentHistory').props.children[4].props.data,
    ).toStrictEqual([]);
  });

  test('edit payment', async () => {
    const rend = await waitFor(() => render(<App />));
    fireEvent(rend.getByTestId('FooterTouchable'), 'press');
    const inputElement = rend.getByPlaceholderText('Payment');
    fireEvent.changeText(inputElement, '50');
    await waitFor(() => fireEvent(rend.getByText('Submit'), 'press'));
    fireEvent(rend.getByText('List of Payments'), 'press');

    fireEvent(rend.getByTestId('PaymentItem-0'), 'press');
    await waitFor(() => fireEvent(rend.getByText('Edit'), 'press'));
    fireEvent.changeText(rend.getByPlaceholderText('Payment'), '100');
    await waitFor(() => fireEvent(rend.getByText('Submit'), 'press'));
    fireEvent(rend.getByText('List of Payments'), 'press');
    expect(
      rend.getByTestId('PaymentHistory').props.children[4].props.data[0],
    ).toMatchObject({ id: '0', value: 100 });
  });

  test('try to add invalid Payment', async () => {
    const rend = await waitFor(() => render(<App />));
    fireEvent(rend.getByTestId('FooterTouchable'), 'press');
    const inputElement = rend.getByPlaceholderText('Payment');
    fireEvent.changeText(inputElement, 'aaaa');
    await waitFor(() => fireEvent(rend.getByText('Submit'), 'press'));
    fireEvent(rend.getByText('List of Payments'), 'press');
    expect(rend.getByTestId('PaymentHistory').props.children[4].props.data.length).toBe(0)
  });

  test('try to add zero Payment', async () => {
    const rend = await waitFor(() => render(<App />));
    fireEvent(rend.getByTestId('FooterTouchable'), 'press');
    const inputElement = rend.getByPlaceholderText('Payment');
    fireEvent.changeText(inputElement, '0');
    await waitFor(() => fireEvent(rend.getByText('Submit'), 'press'));
    fireEvent(rend.getByText('List of Payments'), 'press');
    expect(rend.getByTestId('PaymentHistory').props.children[4].props.data.length).toBe(0)
  });
});
