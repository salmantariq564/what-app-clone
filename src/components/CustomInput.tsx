import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from './CustomIcon';
import { colors } from '../utils/colors';
import { metrics } from '../utils/metrics';

interface CustomInputProps {
  onSend: (message: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  onSend,
  newMessage,
  setNewMessage,
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            family="Octicons"
            color={colors.textColor}
            name="smiley"
            size={metrics.width(24)}
          />
        </TouchableOpacity>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
          placeholder="Message"
          placeholderTextColor={colors.textColor}
        />
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            family="Entypo"
            name="attachment"
            color={colors.textColor}
            size={metrics.width(22)}
            style={{ marginRight: metrics.width(15) }}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            family="FontAwesome"
            name="camera"
            color={colors.textColor}
            size={metrics.width(22)}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        disabled={newMessage?.length == undefined}
        activeOpacity={0.6}
        onPress={onSend}>
        <Icons
          family={
            isKeyboardVisible && newMessage?.length > 0
              ? 'MaterialIcons'
              : 'MaterialCommunityIcons'
          }
          style={styles.send}
          name={
            isKeyboardVisible && newMessage?.length > 0 ? 'send' : 'microphone'
          }
          size={metrics.width(22)}
          color={colors.white}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.width(10),
    paddingBottom: metrics.height(5),
  },
  inputContainer: {
    width: '88%',
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'white',
    borderRadius: 100,
    height: metrics.height(45),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.width(10),
  },
  input: {
    color: colors.black,
    width: '75%',
    height: '100%',
    padding: 0,
    margin: 0,
    paddingHorizontal: metrics.width(12),
    fontSize: metrics.width(20),
  },
  send: {
    backgroundColor: colors.HEADER_BACKGROUND,
    padding: metrics.width(10),
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export default CustomInput;
