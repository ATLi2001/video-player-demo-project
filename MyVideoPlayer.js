import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

// API key for Youtube
const API_KEY = "API_KEY";

function MyVideoPlayer({ route }) {
  const [channelTitle, setChannelTitle] = useState("");
  // default channelPic to prevent warnings
  const [channelPic, setChannelPic] = useState(
    "https://yt3.ggpht.com/a/AATXAJwTUV61MSj2X7gY4UkyRfDbQ1xgQf4mAZfLZA=s88-c-k-c0xffffffff-no-rj-mo"
  );
  // get the passed in parameters
  const { videoId, channelId, title, description } = route.params;

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&maxResults=1&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        setChannelTitle(json.items[0].snippet.title);
        setChannelPic(json.items[0].snippet.thumbnails.default.url);
      })
      .catch((error) => console.error(error));
  });

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
          renderLoading={() => (
            <ActivityIndicator size="large" style={styles.loading} />
          )}
          startInLoadingState={true}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.channel}>
          <Image source={{ uri: channelPic }} style={styles.channelPic} />
          <View style={styles.channelTitleWrap}>
            <Text style={styles.channelTitle}>{channelTitle}</Text>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
    flex: 1,
  },
  video: {
    width: "100%",
    height: "40%",
    padding: 10,
  },
  loading: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    margin: 8,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
  },
  description: {
    marginTop: 8,
    fontSize: 12,
  },
  channel: {
    flexDirection: "row",
    marginVertical: 8,
  },
  channelPic: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
  channelTitleWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  channelTitle: {
    fontSize: 18,
  },
});

export default MyVideoPlayer;
