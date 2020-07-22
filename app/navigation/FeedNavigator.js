import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name={routes.FEED}
        component={ListingsScreen}
      ></Stack.Screen>
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
