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

  closeIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
    marginTop: 10,
  },

  paymentInput: {
    height: 40,
    margin: 12,
    padding: 10,
    right: 0,
  },

  submitButton: {
    right: 0,
    marginTop: '180%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: COLORS.tertiary,
  },

  pressedSubmitButton: {
    opacity: 0.9,
    transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }],
  },

  submitText: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
