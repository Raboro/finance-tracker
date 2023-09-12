import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 3,
    borderColor: 'black',
    borderRadius: 0,
  },

  leftButton: {
    flex: 1.5,
    paddingTop: 30,
    borderRightWidth: 0,
    borderTopLeftRadius: 30,
  },

  rightButton: {
    flex: 1.5,
    paddingTop: 30,
    borderLeftWidth: 0,
    borderTopRightRadius: 30,
  },

  centerButton: {
    paddingBottom: 10,
    marginTop: 25,
    marginBottom: 20,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderTopWidth: 0,
  },
});
