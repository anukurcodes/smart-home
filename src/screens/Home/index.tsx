import React, {FC, useEffect, useState} from 'react';
import {IHomeProps, IPublishPayload, ISwitchData} from '../../interfaces';
import SwitchBoxWrapper from '../../components/SwitchWrapper';

import MQTT, {IMqttClient, QoS} from 'sp-react-native-mqtt';
import Constants from '../../utils/constants';
import {setError} from '../../redux/misc/actions';

const new_client = MQTT.createClient({
  clientId: 'e465b8e75668',
  uri: 'mqtt://test.mosquitto.org:1883',
  keepalive: 10,
  // clean: true,
  /* host: 'a1b2c3d4.oxo.oco-southeast1.emqxsl.com',
  port: 8883,
  protocol: 'mqtts',
  tls: true,
  clean: true,
  auth: true,
  user: 'xoxo',
  pass: 'xoxo1234', */
});

const Home: FC<IHomeProps> = () => {
  const [mqttClient, setMqttClient] = useState<IMqttClient>();
  const [mqttSwitchData, setMqttData] = useState<ISwitchData[]>([]);

  useEffect(() => {
    !mqttClient?.isConnected &&
      new_client
        .then(client => {
          client.on('closed', function () {
            console.log('mqtt.event.closed');
          });

          client.on('error', function (msg) {
            console.log('mqtt.event.error', msg);
          });

          client.on('message', function (msg) {
            onMsgRecieved(msg);
          });

          client.on('connect', function () {
            console.log('connected');
            // client.subscribe(Constants.mqttTopic.sub, 0);
            // client.publish('to/device_e465b8e75668', 'test', 0, false);
            setMqttClient(client);
          });

          client.connect();
        })
        .catch(err => {
          console.error(err);
          setError(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mqttClient?.isConnected) {
      mqttClient.subscribe(Constants.mqttTopic.sub, 0);
    }
  }, [mqttClient]);

  const onMsgRecieved = (msg: {
    data: any;
    qos?: QoS;
    retain?: boolean;
    topic?: string;
  }) => {
    const data: ISwitchData[] = [];
    console.log('MQTT Message Recieved: ', msg);
    const msgData = msg.data;
    msgData.split('').forEach((state: any, i: any) => {
      const obj: ISwitchData = {
        id: '',
        isOn: false,
        title: '',
      };
      obj.id = `CH_OUT${i + 1}`;
      obj.isOn = state === '1' ? true : false;
      obj.title = `Switch ${i + 1}`;
      data.push(obj);
    });
    setMqttData(data);
  };

  const publishToTopic = (dataToPublish: IPublishPayload) => {
    mqttClient?.publish(
      Constants.mqttTopic.pub,
      JSON.stringify(dataToPublish),
      0,
      false,
    );
  };
  //   const [switchState, setSwitchState] = useState(false);
  return <SwitchBoxWrapper data={mqttSwitchData} onClick={publishToTopic} />;
};
export default Home;
