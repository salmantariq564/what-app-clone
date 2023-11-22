import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { formatTime } from '../utils/constants';
import { colors } from '../utils/colors';
import { useState } from 'react';
import { metrics } from '../utils/metrics';

const Massage = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };
  const [emojiModal, setEmojiModal] = useState(false);
  const [emoji, setEmoji] = useState(null);
  const emojiArray = ['👍', '❤️', '😂', '😮', '😢', '🙏', '🙈'];

  return (
    <>
      <View
        style={
          emojiModal
            ? { backgroundColor: 'skyblue', zIndex: 1, opacity: 0.7 }
            : {}
        }>
        <TouchableOpacity
          activeOpacity={0.6}
          onLongPress={() => setEmojiModal(true)}
          style={[
            styles.container,
            {
              backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
              alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
              marginBottom: metrics.height(emoji ? 40 : 5),
            },
          ]}>
          <CustomText label={message.text} />
          <CustomText
            alignSelf="flex-end"
            color={colors.textColor}
            label={formatTime(message.createdAt)}
          />
          {emoji && (
            <CustomText
              textStyle={{
                position: 'absolute',
                right: 0,
                backgroundColor: 'white',
                borderRadius: 100,
                padding: 3,
              }}
              label={emoji}
              fontSize={22}
              marginTop={15}
            />
          )}
        </TouchableOpacity>
      </View>
      {emojiModal && (
        <View
          style={[
            styles.emojiModalContainer,
            isMyMessage() ? { right: 10 } : { left: 10 },
          ]}>
          {emojiArray?.map((item, i) => (
            <CustomText
              label={item}
              key={i}
              onPress={() => {
                setEmojiModal(false);
                setEmoji(item);
              }}
              fontSize={20}
            />
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  emojiModalContainer: {
    position: 'absolute',
    top: metrics.height(15),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: metrics.width(15),
    borderRadius: 100,
    width: '70%',
    justifyContent: 'space-between',
    zIndex: 1,
  },
});

export default Massage;
