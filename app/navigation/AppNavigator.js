import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FeedNavigator" component={FeedNavigator}></Tab.Screen>
      <Tab.Screen name="ListingEdit" component={ListingEditScreen}></Tab.Screen>
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppNavigator;
