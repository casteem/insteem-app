import React from "react";
import { StackNavigator } from "react-navigation";
import StoriesScene from "../../scenes/Stories/StoriesScene";
import SigninScene from "../../scenes/Auth/SigninScene";

// The main navigation of the app will be TabNavigator.
const PublicNavigator = StackNavigator({
  Home: { screen: StoriesScene },
  Signin: { screen: SigninScene, path: "signin" }
  // New: { screen: SubmitNavigator },
  // Votes: { screen: FollowerNavigator },
  // Profile: { screen: ProfileNavigator }
});

export default PublicNavigator;
