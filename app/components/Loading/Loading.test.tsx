import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react-native";
import LoadingCircle from "./Loading";
import { COLORS } from "../../utils/ColorStyles";

describe('Loading', () => {
  test('leadingStyle', () => {
    const { getByTestId } = render(<LoadingCircle />);
    expect(getByTestId('LoadingCircle').props.color).toBe(COLORS.primary);
  });
});