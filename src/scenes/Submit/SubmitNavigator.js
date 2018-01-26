import React from "react";
import { StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/EvilIcons";
import SubmitScene from "./SubmitScene";

const SubmitNavigator = StackNavigator({
  Submit: { screen: SubmitScene }
});

export default SubmitNavigator;

SubmitNavigator.navigationOptions = {
  title: "Post",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus" color={tintColor} size={30} />
  )
};
