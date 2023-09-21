import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { COLORS } from '../../utils/ColorStyles';
import LoadingCircle from './Loading';

describe('Loading', () => {
  test('leadingStyle', () => {
    const { getByTestId } = render(<LoadingCircle />);
    expect(getByTestId('LoadingCircle').props.color).toBe(COLORS.primary);
  });
});
