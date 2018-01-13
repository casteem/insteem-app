import React from "react";
import { TabNavigator } from "react-navigation";
import StoriesScene from "../../scenes/Stories/StoriesScene";

// The main navigation of the app will be TabNavigator.
const MainNavigator = TabNavigator(
  {
    Home: { screen: StoriesScene }
    // Search: { screen: SearchNavigator },
    // New: { screen: SubmitNavigator },
    // Votes: { screen: FollowerNavigator },
    // Profile: { screen: ProfileNavigator }
  },
  {
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
      showLabel: true
    }
  }
);

export default MainNavigator;
