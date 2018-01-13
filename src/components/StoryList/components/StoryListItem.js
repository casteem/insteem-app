import React from "react";
import { View, Text } from "react-native";

const StoryListItem = props => {
  const { story } = props;
  return (
    <View>
      <Text>{story.title}</Text>
    </View>
  );
};

export default StoryListItem;
