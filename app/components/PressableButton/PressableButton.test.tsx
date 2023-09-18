import { describe, expect, it, test } from '@jest/globals';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import PressableButton from './PressableButton';

describe('PressableButtonRendering', () => {
  test('renderNotNull', () => {
    const r = renderer
      .create(<PressableButton text="" onPress={() => {}} />)
    expect(r).not.toBe(null);
  });

  test('childrenLength', () => {
    const r = renderer
      .create(<PressableButton text="" onPress={() => {}} />)
      .toJSON() as ReactTestRendererJSON | null;
    expect(r?.children?.length).toBe(1);
  });
});
