import {StyleSheet} from 'react-native';
import Constants from '../../utils/constants';

// const isDarkMode = useColorScheme() === 'dark';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 75,
    width: 75,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 20,
    color: 'red',
  },
  wrapper: {
    backgroundColor: Constants.colors.white,
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    // flex: 1 / 3,
  },
  inputWrapper: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 7,
  },
  forgotPassText: {
    fontSize: 11,
    color: 'red',
  },
  loginButtonWrapper: {
    width: '100%',
    paddingHorizontal: 50,
  },
  loginButton: {
    backgroundColor: 'red',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smLoginText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: 'gray',
    fontSize: 13,
    marginBottom: 6,
  },
  smIconWrapper: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  smIcons: {
    width: 40,
    height: 40,
  },
  footNote: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 15,
  },
  registerText: {
    color: 'red',
    fontSize: 13,
  },
  errorText: {
    color: 'red',
  },
});
