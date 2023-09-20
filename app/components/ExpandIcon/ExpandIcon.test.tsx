import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import ExpandIcon from "./ExpandIcon";

describe('ExpandIcon', () => {
  test('iconExpandLess', () => {
    const mockOnPress = jest.fn();
    const rend = render(<ExpandIcon expand={false} changeState={mockOnPress}/>)
    const icon = rend.getByTestId('ExpandIcon');
    fireEvent(icon, 'press');
    expect(mockOnPress).toHaveBeenCalledWith(true);
}); 

  test('iconExpandMore', () => {
    const mockOnPress = jest.fn();
    const rend = render(<ExpandIcon expand={true} changeState={mockOnPress}/>)
    const icon = rend.getByTestId('ExpandIcon');
    fireEvent(icon, 'press');
    expect(mockOnPress).toHaveBeenCalledWith(false);
  }); 
});