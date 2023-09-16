import { StyleSheet } from 'react-native';
import { COLORS } from './ColorStyles';

export const border = StyleSheet.create({
  default: {
    borderColor: COLORS.primary,
    borderRadius: 15,
    borderWidth: 3,
  },
});
