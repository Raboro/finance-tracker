import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/ColorStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.tertiary,
    margin: '3%',
    textAlign: 'center',
    marginHorizontal: '20%',
    paddingTop: Platform.OS === 'android' ? '2%' : '0%',
  },
});
