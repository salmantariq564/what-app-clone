import react, { useState } from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView, Image } from 'react-native';

import CustomInput from '../components/CustomInput';
import { images } from '../assets/Images';
import { massages } from '../utils/constants';
import Massage from '../components/Massage';
import ChatHeader from '../components/ChatHeader';
import { metrics } from '../utils/metrics';

const ChatScreen = ({ route, navigation }) => {
  const user = route.params.user;
  const [massageArray, setMassageArray] = useState(massages);
  const [newMessage, setNewMessage] = useState(null);

  return (
    <KeyboardAvoidingView style={styles.bg}>
      <Image source={images.chatBg} style={styles.bg} />
      <ChatHeader
        onBack={() => navigation.goBack()}
        userImage={{
          uri:
            user?.image ||
            'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg',
        }}
        userName={user?.name}
      />
      <FlatList
        contentContainerStyle={{ paddingBottom: metrics.height(15) }}
        data={massageArray}
        renderItem={({ item }) => <Massage message={item} />}
        style={styles.list}
        inverted
      />
      <CustomInput
        setNewMessage={setNewMessage}
        newMessage={newMessage}
        onSend={() => {
          setMassageArray([
            {
              id: Math.random(),
              text: newMessage,
              createdAt: new Date(),
              user: {
                id: 'u1',
                name: 'Vadim',
              },
            },
            ...massageArray,
          ]);
          setNewMessage(null);
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
