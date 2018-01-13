import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Item = styled.View`
  padding: 12px;
`;

const StoryListItem = props => {
  const { story } = props;
  return (
    <Item>
      <Text>{story.title}</Text>
    </Item>
  );
};

export default StoryListItem;
