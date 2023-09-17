import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/ColorStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    borderRadius: 20,
    marginVertical: 80,
    marginHorizontal: 20,
    backgroundColor: COLORS.secondary,
    borderWidth: 5,
    borderColor: COLORS.primary,
  },

  paymentInput: {
    height: 40,
    margin: 12,
    padding: 10,
    right: 0,
  },
});
