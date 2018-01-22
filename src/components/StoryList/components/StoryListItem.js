import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";

const Item = styled.View`
  padding: 12px;
`;

const Title = styled.Text`
  font-weight: bold;
`;

const StoryListItem = props => {
  const { story, navigation } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Story", { story: story })}
    >
      <Item>
        <Title>{story.title}</Title>
      </Item>
    </TouchableWithoutFeedback>
  );
};

export default withNavigation(StoryListItem);
