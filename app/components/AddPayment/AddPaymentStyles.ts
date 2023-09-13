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
    right:'-30%',
    marginRight: 10,
    marginTop: 10,
  },

  paymentInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    right: '145%',
    width: '70%'
  },

  submitButton: {
    right: '145%',
    marginTop: '20%',
    bottom: '-200%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: COLORS.tertiary,
    borderColor: COLORS.primary,
    borderWidth: 3
  },

  pressedSubmitButton: {
    opacity: 0.9,
    transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }],
  },

  submitText: {
    ontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  }
});
