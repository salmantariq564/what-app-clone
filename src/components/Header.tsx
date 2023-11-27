import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import CustomText from './CustomText';
import { metrics } from '../utils/metrics';
import Icons from './CustomIcon';

const Header = ({ state, descriptors, navigation, position }) => {
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
        <View style={{ width: '15%', marginLeft: 10, }}>
          <Icons
            family="MaterialIcons"
            name="groups"
            color={colors.HEADER_TEXT}
            size={metrics.width(35)}
          />
        </View>

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.bottomBorder,
                {
                  width: '27%',
                  borderBottomColor: isFocused ? colors.white : 'transparent',
                },
              ]}
            >
              <Animated.View>
                <CustomText
                  label={label}
                  fontWeight="bold"
                  fontSize={18}
                  color={isFocused ? colors.white : colors.HEADER_TEXT}

                />
              </Animated.View>
            </TouchableOpacity>
          )
        })}

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
