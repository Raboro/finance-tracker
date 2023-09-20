import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react-native';
import BalanceUI from './Balance';

const SHARED_STYLING = { fontSize: 30, fontWeight: 'bold' };

describe('Balance', () => {
  test('positive balance style', () => {
    expect(getStyling(true)).toMatchObject([
      { color: 'green' },
      SHARED_STYLING,
    ]);
  });

  test('zero balance style', () => {
    expect(getStyling(false, true)).toMatchObject([
      { color: 'black' },
      SHARED_STYLING,
    ]);
  });

  test('negative balance style', () => {
    expect(getStyling(false)).toMatchObject([{ color: 'red' }, SHARED_STYLING]);
  });
});

function getStyling(positive: boolean, zero?: boolean) {
  const balance = zero ? 0 : getRandomNumber(positive);
  const rend = render(<BalanceUI balance={balance} />);
  const text = rend.getByText(balance.toString());
  return text.props.style;
}

function getRandomNumber(positive: boolean): number {
  const number = Math.random() * 99999 + 1;
  return positive ? number : -number;
}
