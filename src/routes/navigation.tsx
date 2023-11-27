import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import UserStack from './UserStack'
import ChatScreen from '../screens/ChatScreen';


type RootStackParamList = {
  UserStack: undefined;
  StatusScreen: undefined;
  ChatScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="UserStack" component={UserStack} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />

    </Stack.Navigator>
  );
};

export default Routes;
