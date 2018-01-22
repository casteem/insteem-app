import React from "react";
import { StackNavigator } from "react-navigation";
import Public from "../../scenes/Public";
import SigninScene from "../../scenes/Auth/SigninScene";

// The main navigation of the app will be TabNavigator.

const PublicNavigator = StackNavigator(
  {
    Home: { screen: Public },
    Signin: { screen: SigninScene, path: "signin" }
    // New: { screen: SubmitNavigator },
    // Votes: { screen: FollowerNavigator },
    // Profile: { screen: ProfileNavigator }
  },
  {
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default PublicNavigator;
