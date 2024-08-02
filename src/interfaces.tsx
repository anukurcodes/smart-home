import {NavigationProp} from '@react-navigation/native';

export type ISwitchBoxProps = {
  data: ISwitchData;
  onClick?: (arg0: IPublishPayload) => void;
};

export type ISwitchData = {
  id: String;
  isOn: boolean;
  title: String;
};
export type IHomeProps = {};
export type ISwitchBoxWrapperProps = {
  data: ISwitchData[];
  onClick?: (arg0: IPublishPayload) => void;
};

export type IPublishPayload = {
  cmd: String;
  data: String;
};

export type IState_User = {
  token: string;
  userData: {name: string; email: string; userId: string; signup_dt: string};
  didTryAutoLogin?: boolean;
};

export type ICredentials = {
  email: string;
  password: string;
};

export type IState_Misc = {
  isLoading: boolean;
  isLoggedIn: boolean;
  isUserRegistered: boolean;
  error: string;
};

export type IState = {
  misc: IState_Misc;
  user: IState_User;
};

export type IAction = {
  type: string;
  payload: {} | IUserRegisterationPayload | ICredentials;
};

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  RegisterUser: undefined;
  WelcomeScreen: undefined;
  //   Profile: {userId: string};
  //   Feed: {sort: 'latest' | 'top'} | undefined;
};
export type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export type IUserRegisterationPayload = {
  name: string;
  email: string;
  password: string;
};
