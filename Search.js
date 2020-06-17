import React, { useState } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";

// API key for Youtube
const API_KEY = "API_KEY";

function Search({ navigation }) {
  const [text, setText] = useState("");
  const [numVids, setNumVids] = useState(15);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="What Videos Are You Looking For?"
        returnKeyType="search"
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() =>
          fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${numVids}&q=${text}&type=video&videoEmbeddable=true&key=${API_KEY}`
          )
            .then((response) => response.json())
            .then((json) => {
              navigation.navigate("DisplaySearchResults", {
                data: json.items,
              });
            })
            .catch((error) => console.error(error))
        }
        defaultValue={text}
      />
      <View style={styles.numVidsContainer}>
        <View style={styles.numVidsText}>
          <Text style={styles.text}>Number of Videos: {numVids}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setNumVids(numVids + 1)}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setNumVids(numVids - 1)}
        >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  numVidsContainer: {
    flexDirection: "row",
  },
  numVidsText: {
    justifyContent: "center",
    marginRight: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 8,
  },
  text: {
    fontSize: 20,
  },
  searchBar: {
    height: 40,
    width: "90%",
    padding: 8,
    margin: 8,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#DDDDDD",
  },
});

export default Search;
