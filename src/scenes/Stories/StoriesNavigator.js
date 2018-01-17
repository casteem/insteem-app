import React from "react";
import { StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import StoriesScene from "./StoriesScene";
import StoryScene from "./StoryScene";

const StoriesNavigator = StackNavigator({
  Stories: { screen: StoriesScene },
  Story: { screen: StoryScene, path: "stories/:story" }
});

StoriesNavigator.navigationOptions = {
  // swipeEnabled: true
};

export default StoriesNavigator;
