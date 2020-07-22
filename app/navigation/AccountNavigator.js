import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
      ></Stack.Screen>
      <Stack.Screen
        name={routes.MESSAGES}
        component={MessagesScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
