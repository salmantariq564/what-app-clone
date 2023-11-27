import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from './CustomText';
import { formatTime } from '../utils/constants';
import { colors } from '../utils/colors';
import { metrics } from '../utils/metrics';



interface StatusProps {
  id: string;
  user: {
    name: string;
    image: string;
  };
  lastMessage: {
    createdAt: string;
  };
}


interface StatusBoxProps {
  status: StatusProps
}


const User: React.FC<StatusBoxProps> = ({ status }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}>
      <Image
        source={{
          uri: status?.user?.image ||
            'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <CustomText
          label={status?.user?.name || 'My Status'}
          fontWeight="bold"
          fontSize={18}
          numberOfLines={1}
        />
        <CustomText
          label={status ? formatTime(status?.lastMessage?.createdAt) : 'Tap to add status update'}
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
