import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from './CustomText';
import moment from 'moment';
import { formatTime } from '../utils/constants';
import { colors } from '../utils/colors';
import { metrics } from '../utils/metrics';
// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';

// dayjs.extend(relativeTime);

interface Chat {
  id: string;
  user: {
    name: string;
    image: string;
  };
  lastMessage: {
    createdAt: string;
    text: string;
  };
}

interface UserProps {
  chat: Chat;
}

const User: React.FC<UserProps> = ({ chat }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('ChatScreen', chat)}
      style={styles.container}>
      <Image
        source={{
          uri:
            chat?.user?.image ||
            'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <CustomText
            label={chat?.user?.name}
            fontWeight="bold"
            fontSize={18}
            numberOfLines={1}
          />
          <CustomText
            label={formatTime(chat?.lastMessage?.createdAt)}
            color={colors.textColor}
          />
        </View>
        <CustomText
          label={chat?.lastMessage?.text}
          numberOfLines={1}
          color={colors.textColor}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: metrics.width(12),
    marginVertical: metrics.height(5),
    height: metrics.height(75),
    alignItems: 'center',
  },
  image: {
    width: metrics.width(55),
    height: metrics.width(55),
    borderRadius: 100,
    marginRight: metrics.width(15),
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.height(5),
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});

export default User;
