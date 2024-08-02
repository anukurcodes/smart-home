import {StyleSheet} from 'react-native';
import Constants from '../../utils/constants';

export const styles = StyleSheet.create({
  switchWrapper: {
    flex: 1,
    minWidth: 100,
    minHeight: 150,
    width: 100,
    height: 150,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: '#d3d3d3',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  switchTitle: {
    flex: 1,
  },
  indicator: {
    width: 30,
    height: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  indecatorOn: {
    backgroundColor: Constants.colors.switch.on,
  },
  indecatorOff: {
    backgroundColor: Constants.colors.switch.off,
  },
});
