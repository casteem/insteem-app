import React from "react";
import { TabNavigator } from "react-navigation";
import StoriesScene from "../../scenes/Stories/StoriesScene";
import SigninScene from "../../scenes/Auth/SigninScene";

// The main navigation of the app will be TabNavigator.
const PublicNavigator = TabNavigator(
  {
    Home: { screen: StoriesScene },
    Signin: { screen: SigninScene }
    // New: { screen: SubmitNavigator },
    // Votes: { screen: FollowerNavigator },
    // Profile: { screen: ProfileNavigator }
  },
  {
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      showLabel: true
    }
  }
);

export default PublicNavigator;
