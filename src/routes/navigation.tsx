import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import UserList from '../screens/UserList';

type RootStackParamList = {
  UserList: undefined;
  ChatScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="UserList">
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
