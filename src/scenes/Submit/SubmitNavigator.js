import React from "react";
import { StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/EvilIcons";
import StoryScene from "insteem/src/scenes/Stories/StoryScene";
import SubmitScene from "./SubmitScene";

const SubmitNavigator = StackNavigator({
  Submit: { screen: SubmitScene },
  Story: { screen: StoryScene, path: "stories/:story" }
});

export default SubmitNavigator;

SubmitNavigator.navigationOptions = {
  title: "Post",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus" color={tintColor} size={30} />
  )
};
