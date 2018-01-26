import React from "react";
import { TabNavigator } from "react-navigation";

import FollowerNavigator from "insteem/src/scenes/Follower/components/FollowerNavigator";
import StoriesNavigator from "../../scenes/Stories/StoriesNavigator";
import SubmitNavigator from "../../scenes/Submit/SubmitNavigator";
import ProfileScene from "../../scenes/Profile/ProfileScene";

// The main navigation of the app will be TabNavigator.
const MainNavigator = TabNavigator(
  {
    Home: { screen: StoriesNavigator },
    // Search: { screen: SearchNavigator },
    New: { screen: SubmitNavigator },
    Follower: { screen: FollowerNavigator },
    Profile: { screen: ProfileScene }
  },
  {
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default MainNavigator;
