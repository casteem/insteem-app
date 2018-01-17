import React from "react";
import { StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import StoriesScene from "./StoriesScene";

const StoriesNavigator = StackNavigator({
  Stories: { screen: StoriesScene }
  // Post: { screen: PostScene, path: "post/:post" }
});

StoriesNavigator.navigationOptions = {
  // swipeEnabled: true
};

export default StoriesNavigator;
