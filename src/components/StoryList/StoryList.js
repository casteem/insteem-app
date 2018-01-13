import React from "react";
import { map } from "ramda";
import { View } from "react-native";

import StoryListItem from "./components/StoryListItem";

const renderStories = map(story => (
  <StoryListItem key={story.id} story={story} />
));

const StoryList = props => {
  const { stories } = props;
  return <View>{renderStories(stories)}</View>;
};

export default StoryList;
