import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  TouchableWithoutFeedback
} from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  title: {
    fontWeight: "bold"
  },
  column: { margin: 2 }
});

const openExternalLink = user => {
  return Linking.openURL(`https://steemit.com/@${user}`);
};

// Render a single post item in the post ListView.
export default ({ follower, navigation }) => {
  return (
    <View style={style.container}>
      <View>
        <Text
          style={style.column}
          onPress={openExternalLink.bind(this, follower.follower)}
        >
          {follower.follower}
        </Text>
      </View>
    </View>
  );
};
