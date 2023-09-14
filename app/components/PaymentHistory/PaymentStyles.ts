import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/ColorStyles';

export const styles = StyleSheet.create({
  container: {
    width: '75%',
    borderWidth: 3,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.tertiary,
    flex: 1,
    justifyContent: 'center',
    marginBottom: '30%',
    marginTop: '15%',
    borderRadius: 15,
  },

  containerSmall: {
    marginBottom: '120%',
  },

  expand: {
    position: 'absolute',
    right: 0,
    marginRight: '5%',
    top: 0,
    marginTop: '8%',
  },

  expandMore: {
    marginTop: '3%',
  },

  heading: {
    textAlign: 'center',
    marginVertical: '5%',
    fontWeight: 'bold',
  },
});
