import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={ListingsScreen}></Stack.Screen>
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        // options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
