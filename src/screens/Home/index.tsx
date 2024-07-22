import React, {FC} from 'react';
import {IHomeProps, ISwitchBoxWrapperProps} from '../../interfaces';
import SwitchBoxWrapper from '../../components/SwitchWrapper';

const Home: FC<IHomeProps> = () => {
  const data: ISwitchBoxWrapperProps = {
    data: [
      {
        isOn: false,
        title: 'Switch 1',
      },
      {
        isOn: true,
        title: 'Switch 2',
      },
      {
        isOn: false,
        title: 'Switch 3',
      },
      {
        isOn: true,
        title: 'Switch 4',
      },
      {
        isOn: true,
        title: 'Switch 5',
      },
      {
        isOn: false,
        title: 'Switch 6',
      },
    ],
  };
  //   const [switchState, setSwitchState] = useState(false);
  return <SwitchBoxWrapper data={data.data} />;
};
export default Home;
