import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { View, ListView, Text, StyleSheet, Image } from "react-native";
import StoryItem from "./components/StoryItem";
import Loader from "../../../components/Elements/Loader";

// Show the list of the latest posts.
class StoryScene extends React.Component {
  // Configure options for the navigation component.
  static navigationOptions = {
    title: "Story",
    headerBackTitle: null
  };
  render() {
    const { data: { loading, getContent: story } } = this.props;
    if (loading) return <Loader />;
    const { params } = this.props.navigation.state;
    return <StoryItem story={story} />;
  }
}

const QUERY = gql`
  query getStory($author: String!, $permlink: String!) {
    getContent(author: $author, permlink: $permlink) {
      id
      title
      author
      body
      net_votes
    }
  }
`;

export default graphql(QUERY, {
  options: props => {
    const { params } = props.navigation.state;
    return {
      variables: {
        author: params.author,
        permlink: params.permlink
      }
    };
  }
})(StoryScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});
