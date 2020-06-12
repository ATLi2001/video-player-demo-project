import React from "react";

import MyVideoPlayer from "./MyVideoPlayer";
import DisplaySearchResults from "./DisplaySearchResults";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DisplaySearchResults">
        <Stack.Screen
          name="DisplaySearchResults"
          component={DisplaySearchResults}
        />
        <Stack.Screen name="MyVideoPlayer" component={MyVideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
