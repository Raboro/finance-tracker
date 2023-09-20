import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import ClosingIcon from './ClosingIcon';

describe('ClosingIcon', () => {
  test('buttonClick', () => {
    const mockOnPress = jest.fn();
    const rend = render(<ClosingIcon visibilityChange={mockOnPress} />);
    const button = rend.getByTestId('ClosingIcon');
    fireEvent(button, 'press');
    expect(mockOnPress).toHaveBeenCalled();
  });
});
