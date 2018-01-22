import React from "react";
import _ from "lodash";
import { StyleSheet, View, Text, ScrollView, WebView } from "react-native";
// import HTMLView from "react-native-htmlview";
// import Markdown from "react-native-easy-markdown";

// import PostHeader from "./components/PostHeader";
// import PostFooter from "./components/PostFooter";

// This component renders a single Post view.
class StoryItem extends React.Component {
  render() {
    const { story } = this.props;
    // Get the format of the post: `markdown`, `html` or `markdown+html`.
    // NOTE: json_metadata returns an Object inside a String, so we have to
    // parse it first.
    // const format = _.get(JSON.parse(style.json_metadata), "format");
    return (
      <ScrollView style={style.container}>
        {/*<PostHeader post={post} />*/}
        <Text style={style.title}>{story.title}</Text>
        {/*        {format === "html" ? (
          <HTMLView value={story.body} width="100%" height="100%" />
        ) : (
          <Markdown>{story.body}</Markdown>
        )}*/}
        {/*<PostFooter post={post} />*/}
      </ScrollView>
    );
  }
}

export default StoryItem;

// Style
const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  }
});
