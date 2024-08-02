import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

type IAppHeaderProps = {
  title: String;
  logoPath?: ImageSourcePropType;
};
const AppHeader: FC<IAppHeaderProps> = ({title, logoPath}) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.logoWrapper}>
        {logoPath ? <Image source={logoPath} /> : <Text>AP</Text>}
      </View>
      <View style={styles.titleWrapper}>
        <Text>{title}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text>Right</Text>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
  },
  logoWrapper: {
    flex: 1,
  },
  titleWrapper: {
    flex: 2,
  },
  rightSection: {
    flex: 1,
  },
});
