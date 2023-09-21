import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import { Alert } from 'react-native';
import Settings from './Settings';

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

describe('Settings', () => {
  test('correct pop up', () => {
    const rend = render(<Settings />);
    const item = rend.getByTestId('Settings');
    fireEvent(item, 'press');
    expect(Alert.alert).toHaveBeenCalledWith('Are not supported yet.');
  });
});
