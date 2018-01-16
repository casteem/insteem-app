import React from "react";
import { StackNavigator } from "react-navigation";
import { StyleSheet, Image } from "react-native";
import ProfileScene from "insteem-app/src/scenes/Profile/ProfileScene.js";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileNavigator = StackNavigator({
  Posts: { screen: ProfileScene }
});

ProfileNavigator.navigationOptions = {
  title: "Profile",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-contact" size={30} color={tintColor} />
  )
};

export default ProfileNavigator;
