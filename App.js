import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StaticSearch from "./StaticSearch";
import DisplaySearchResults from "./DisplaySearchResults";
import MyVideoPlayer from "./MyVideoPlayer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StaticSearch">
        <Stack.Screen name="StaticSearch" component={StaticSearch} />
        <Stack.Screen
          name="DisplaySearchResults"
          component={DisplaySearchResults}
        />
        <Stack.Screen name="MyVideoPlayer" component={MyVideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
