import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";

// from youtube api, a search query for "cat" returned the following json file
import myJson from "./youtube_cat_search.json";
const data = myJson.items;

// API key for Youtube
const API_KEY = "AIzaSyD0F7YTY-SJA6GH7dEl2V4pWwpc-8xYzns";

// dimensions of window
const window = Dimensions.get("window");

function DisplaySearchResults({ navigation }) {
  // separator between each video search result
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          // each item is a view with thumbnail and video title in a row
          <View style={styles.item}>
            <Image
              source={{ uri: item.snippet.thumbnails.default.url }}
              style={{
                width: item.snippet.thumbnails.default.width,
                height: item.snippet.thumbnails.default.height,
              }}
            />
            <View style={styles.video_name_and_user}>
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate("MyVideoPlayer", {
                    videoId: item.id.videoId,
                    channelId: item.snippet.channelId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                  })
                }
              >
                <View style={styles.titleWrap}>
                  <Text style={styles.title}>{item.snippet.title}</Text>
                </View>
              </TouchableHighlight>
              <Text style={styles.username}> {item.snippet.channelTitle} </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.etag} // item etag is unique
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  video_name_and_user: {
    marginLeft: 8,
  },
  titleWrap: {
    flexDirection: "row",
    flex: 1,
  },
  title: {
    flexWrap: "wrap",
    textAlign: "left",
    fontSize: 20,
    color: "#2196F3",
    width: window.width - 150,
  },
  username: {
    marginTop: 2,
    fontSize: 12,
  },
  // a gray horizontal line
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE",
    marginVertical: 4,
  },
});

export default DisplaySearchResults;
