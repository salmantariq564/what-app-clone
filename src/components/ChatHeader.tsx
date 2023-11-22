import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import Icons from './CustomIcon';
import { metrics } from '../utils/metrics';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

const ChatHeader = ({ userImage, userName, onBack }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
          <Icons
            family="Ionicons"
            name="arrow-back"
            color={colors.white}
            size={metrics.width(25)}
          />
        </TouchableOpacity>
        <CustomImage source={userImage} style={styles.userImage} />
        <CustomText
          label={userName}
          marginLeft={12}
          color={colors.white}
          fontSize={20}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '25%',
        }}>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            family="Ionicons"
            name="videocam"
            color={colors.white}
            size={metrics.width(23)}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            family="MaterialIcons"
            name="local-phone"
            color={colors.white}
            size={metrics.width(23)}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            family="Entypo"
            name="dots-three-vertical"
            color={colors.white}
            size={metrics.width(22)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.HEADER_BACKGROUND,
    padding: metrics.width(10),
  },
  userImage: {
    width: metrics.width(40),
    height: metrics.width(40),
    borderRadius: 100,
    marginLeft: metrics.width(5),
  },
});
