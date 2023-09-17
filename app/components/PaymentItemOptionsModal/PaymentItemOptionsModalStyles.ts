import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/ColorStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    borderRadius: 20,
    marginVertical: 300,
    marginHorizontal: 20,
    backgroundColor: COLORS.secondary,
    borderWidth: 5,
    borderColor: COLORS.primary,
  },

  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: '15%',
  },
});
