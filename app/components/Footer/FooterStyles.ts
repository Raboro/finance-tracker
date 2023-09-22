import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/ColorStyles';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.secondary,
    height: Platform.OS === 'android' ? 70 : 100,
    width: '100%',
    bottom: Platform.OS === 'android' ? 0 : -40,
  },

  circle: {
    position: 'absolute',
    backgroundColor: COLORS.quaternary,
    height: 80,
    width: '20%',
    borderRadius: 50,
    bottom: Platform.OS === 'android' ? 30 : 50,
  },

  centerButton: {
    backgroundColor: COLORS.secondary,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 35 : 55,
    borderRadius: 50,
    width: '18%',
    height: 75,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    paddingLeft: 4,
    borderWidth: 4,
    borderColor: COLORS.primary,
    elevation: 2,
  },
});
