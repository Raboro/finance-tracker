import { StyleSheet } from 'react-native';
import { COLORS } from './ColorStyles';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.quaternary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
