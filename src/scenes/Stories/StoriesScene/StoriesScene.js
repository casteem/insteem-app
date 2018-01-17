import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import StoryList from "../../../components/StoryList";

const StoriesScene = props => {
  console.log(props);
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
    }
  }
`;

StoriesScene.navigationOptions = ({ navigation }) => ({
  title: "Insteem",
  headerRight: (
    <Button title="Sign In" onPress={() => navigation.navigate("Signin")} />
  ),
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-list" color={tintColor} size={30} />
  )
});

export default graphql(Query)(StoriesScene);
