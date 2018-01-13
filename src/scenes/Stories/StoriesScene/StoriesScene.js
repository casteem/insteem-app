import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { map } from "ramda";
import { View, Text } from "react-native";

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
    }
  }
`;

export default graphql(Query)(StoriesScene);
