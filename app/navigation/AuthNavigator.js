import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name={routes.LOGIN} component={LoginScreen}></Stack.Screen>
      <Stack.Screen
        name={routes.REGISTER}
        component={RegisterScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
