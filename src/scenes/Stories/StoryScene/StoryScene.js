import React from "react";
import { View, ListView, Text, StyleSheet, Image } from "react-native";
import StoryItem from "./components/StoryItem";

// Show the list of the latest posts.
class StoryScene extends React.Component {
  // Configure options for the navigation component.
  static navigationOptions = {
    title: "Story",
    headerBackTitle: null
  };
  render() {
    const { params } = this.props.navigation.state;
    const { story } = params;
    return <StoryItem story={story} />;
  }
}

export default StoryScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});
