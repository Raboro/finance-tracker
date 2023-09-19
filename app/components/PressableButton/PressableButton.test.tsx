import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import PressableButton from './PressableButton';

describe('PressableButton', () => {
  test('renderNotNull', () => {
    const r = renderer.create(<PressableButton text="" onPress={() => {}} />);
    expect(r).not.toBe(null);
  });

  test('childrenLength', () => {
    const r = renderer
      .create(<PressableButton text="" onPress={() => {}} />)
      .toJSON() as ReactTestRendererJSON | null;
    expect(r?.children?.length).toBe(1);
  });

  test('propsNotNull', () => {
    const r = renderer
      .create(<PressableButton text="" onPress={() => {}} />)
      .toJSON() as ReactTestRendererJSON | null;
    expect(r?.props).not.toBe(null);
  });

  test('pressButton', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <PressableButton text="" onPress={mockOnPress} />,
    );
    const button = getByTestId('PressableButton');
    fireEvent(button, 'press');
    expect(mockOnPress).toHaveBeenCalled();
  });
});
