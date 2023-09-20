import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import Footer from './Footer';

describe('Footer', () => {
  test('buttonClick', () => {
    const mockOnPress = jest.fn();
    const rend = render(<Footer setAddPaymentVisibility={mockOnPress} />);
    const button = rend.getByTestId('FooterTouchable');
    fireEvent(button, 'press');
    expect(mockOnPress).toHaveBeenCalled();
  });
});
