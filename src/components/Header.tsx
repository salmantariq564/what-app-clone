import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import { metrics } from '../utils/metrics';
import Icons from './CustomIcon';

const Header = ({ tab, setTab }) => {
  const titleArray = [
    {
      id: 0,
      icon: true,
      width: '15%',
    },
    {
      id: 1,
      title: 'Chats',
      width: '27%',
    },
    {
      id: 2,
      title: 'Updates',
      width: '31%',
    },
    {
      id: 3,
      title: 'Calls',
      width: '27%',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <CustomText
          fontSize={24}
          marginLeft={20}
          label="Whatsapp"
          fontWeight="500"
          color={colors.white}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '25%',
            marginRight: metrics.width(10),
          }}>
          <TouchableOpacity activeOpacity={0.6}>
            <Icons
              family="Feather"
              name="camera"
              color={colors.white}
              size={metrics.width(25)}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <Icons
              family="MaterialIcons"
              name="search"
              color={colors.white}
              size={metrics.width(25)}
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
      <View style={styles.container}>
        {titleArray.map((item, i) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setTab(i)}
            style={[
              styles.bottomBorder,
              {
                width: item.width,
                borderBottomColor: tab == i ? colors.white : 'transparent',
              },
            ]}
            key={item.id}>
            {item.icon ? (
              <Icons
                family="MaterialIcons"
                name="groups"
                color={tab == i ? colors.white : colors.HEADER_TEXT}
                size={metrics.width(35)}
              />
            ) : (
              <CustomText
                label={item.title}
                color={tab == i ? colors.white : colors.HEADER_TEXT}
                fontWeight="bold"
                fontSize={18}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: colors.HEADER_BACKGROUND,
  },
  container: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomBorder: {
    borderBottomWidth: 2,
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
