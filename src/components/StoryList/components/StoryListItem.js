import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Item = styled.View`
  padding: 12px;
`;

const Title = styled.Text`
  font-weight: bold;
`;

const StoryListItem = props => {
  const { story } = props;
  return (
    <Item>
      <Title>{story.title}</Title>
    </Item>
  );
};

export default StoryListItem;
