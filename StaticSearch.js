import React from "react";
import { Button, View } from "react-native";

// from youtube api, a search query for "cat" returned the following json file
import myJson from "./youtube_cat_search.json";
const data = myJson.items;

function StaticSearch({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Search for cat"
        onPress={() =>
          navigation.navigate("DisplaySearchResults", {
            data: data,
          })
        }
      />
    </View>
  );
}

export default StaticSearch;
