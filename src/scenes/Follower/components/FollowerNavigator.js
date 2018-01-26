import React from "react";
import { StackNavigator } from "react-navigation";
import { StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import FollowerScene from "insteem/src/scenes/Follower/FollowerScene.js";

const FollowerNavigator = StackNavigator({
  Follower: { screen: FollowerScene }
});

FollowerNavigator.navigationOptions = {
  title: "Follower",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-heart-outline" size={30} color={tintColor} />
  )
};

export default FollowerNavigator;
