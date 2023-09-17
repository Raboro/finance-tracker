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
    marginTop: '15%'
  },

  button: {
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: COLORS.tertiary,
  },

  pressedButton: {
    opacity: 0.9,
    transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }],
  },

  text: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
