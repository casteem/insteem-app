import React from "react";
import { map } from "ramda";
import { View, FlatList } from "react-native";

import StoryListItem from "./components/StoryListItem";

const renderStories = map(story => (
  <StoryListItem key={story.id} story={story} />
));

const _keyExtractor = (item, index) => item.permlink;

const StoryList = props => {
  const { stories } = props;
  return (
    <FlatList
      data={stories}
      keyExtractor={_keyExtractor}
      renderItem={story => <StoryListItem story={story.item} />}
    />
  );
};

export default StoryList;
