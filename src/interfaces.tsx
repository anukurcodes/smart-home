export interface ISwitchBoxProps {
  data: ISwitchData;
  onClick?: (arg0: IPublishPayload) => void;
}

export interface ISwitchData {
  id: String;
  isOn: boolean;
  title: String;
}
export interface IHomeProps {}
export interface ISwitchBoxWrapperProps {
  data: ISwitchData[];
  onClick?: (arg0: IPublishPayload) => void;
}

export interface IPublishPayload {
  cmd: String;
  data: String;
}
