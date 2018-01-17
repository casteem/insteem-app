import React from "react";
import { View, Button } from "react-native";
import StoriesScene from "../Stories/StoriesScene";

const Public = props => {
  return (
    <View>
      <StoriesScene />
    </View>
  );
};

Public.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <Button title="Sign In" onPress={() => navigation.navigate("Signin")} />
  )
});

export default Public;
