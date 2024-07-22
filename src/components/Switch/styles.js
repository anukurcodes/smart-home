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

    // border: '1 solid #d3d3d3',
  },
  switchTitle: {
    flex: 1,
  },
  // switchOn: {
  //   /*     WebkitBoxShadow: 'inset 0 20 25 -12 rgba(0, 0, 0, 0.75)',
  //   MozBoxShadow: 'inset 0 20 25 -12 rgba(0, 0, 0, 0.75)',
  //   BoxShadow: 'inset 0 20 25 -12 rgb(111 111 111 / 75%)', */
  //   // shadowT
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 20},
  //   shadowOpacity: 0.25,
  //   shadowRadius: -12,
  // },
  // switchOff: {
  //   WebkitBoxShadow: 'inset 0 -20 25 -12 rgba(0, 0, 0, 0.75)',
  //   MozBoxShadow: 'inset 0 -20 25 -12 rgba(0, 0, 0, 0.75)',
  //   BoxShadow: 'inset 0 -20 25 -12 rgb(111 111 111 / 75%)',
  // },
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
