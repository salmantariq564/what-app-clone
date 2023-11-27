import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import UserList from '../screens/UserList';
import StatusScreen from '../screens/StatusScreen';
import Header from '../components/Header';

type RootStackParamList = {
  UserList: undefined;
  StatusScreen: undefined;
};
const Stack = createMaterialTopTabNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      tabBar={props => <Header {...props} />}
      initialRouteName="UserList">
      <Stack.Screen options={{ title: 'Chats' }} name="UserList" component={UserList} />
      <Stack.Screen options={{ title: 'Updates' }} name="StatusScreen" component={StatusScreen} />
      <Stack.Screen name="Calls" component={StatusScreen} />

    </Stack.Navigator>
  );
};

export default Routes;
