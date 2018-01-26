import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";
import moment from "moment";
import VoteButton from "../../../components/Buttons/VoteButton";

const Item = styled.View`
  background-color: white;
  margin: 7px 5px;
  padding: 15px;
  border-radius: 3px;
  shadow-color: #666;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const Meta = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

const Author = styled.View``;

const StoryListItem = props => {
  const { story, navigation } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Story", {
          story: story,
          author: story.author,
          permlink: story.permlink
        })
      }
    >
      <Item>
        <Title>{story.title}</Title>
        <Meta>
          <Author>
            <Text>
              {" "}
              {moment.utc(story.created).fromNow()} by {story.author}
            </Text>
          </Author>
          <View>
            <VoteButton votes={story.net_votes} />
          </View>
        </Meta>
      </Item>
    </TouchableWithoutFeedback>
  );
};

export default withNavigation(StoryListItem);
