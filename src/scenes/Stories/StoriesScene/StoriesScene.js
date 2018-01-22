import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import StoryList from "../../../components/StoryList";

const StoriesScene = props => {
  const { data: { loading, getDiscussions: stories } } = props;
  if (loading) return <Text>Loading</Text>;
  return <StoryList stories={stories} />;
};

const Query = gql`
  {
    getDiscussions {
      id
      title
      author
      permlink
      net_votes
    }
  }
`;

StoriesScene.navigationOptions = () => ({
  title: "Stories",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-list" color={tintColor} size={30} />
  )
});

export default graphql(Query)(StoriesScene);
