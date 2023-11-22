import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Icons from '../components/CustomIcon';
import Header from '../components/Header';
import User from '../components/User';

import { userList } from '../utils/constants';
import { metrics } from '../utils/metrics';
import { colors } from '../utils/colors';

const windowHeight = Dimensions.get('window').height;
const UserList: React.FC = () => {
  const [tab, setTab] = useState(1);
  return (
    <View style={StyleSheet.mainContainer}>
      <TouchableOpacity activeOpacity={0.6} style={styles.chatIcon}>
        <Icons
          family="MaterialIcons"
          name="chat"
          color={colors.white}
          size={metrics.width(25)}
        />
      </TouchableOpacity>
      <StatusBar animated={true} backgroundColor={colors.HEADER_BACKGROUND} />
      <Header tab={tab} setTab={setTab} />

      <FlatList
        data={userList}
        renderItem={({ item }) => <User chat={item} />}
        style={{ backgroundColor: 'white' }}
      />
    </View>
  );
};

export default UserList;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.APP_BACKGROUND,
    flex: 1,
  },
  chatIcon: {
    width: metrics.width(60),
    height: metrics.width(60),
    borderRadius: 15,
    backgroundColor: colors.HEADER_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: windowHeight - 90,
    right: 0,
    zIndex: 1,
    margin: metrics.width(20),
  },
});
