import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { connect } from "react-redux";
import FollowerView from "./components/FollowerView";
import { View, Text, ListView } from "react-native";
import Loader from "insteem/src/components/Elements/Loader";

// Show the the latest votes of the user.
class FollowerScene extends React.Component {
  // Configure options for the navigation component.
  static navigationOptions = {
    title: "Follower"
  };

  render() {
    const {
      data: { loading, getFollowCount: follow, getFollowers: followers }
    } = this.props;
    if (loading) return <Loader />;
    return (
      <View style={style.container}>
        <View>
          <Text style={style.header}>{follow.follower_count}</Text>
        </View>
        <FollowerView followers={followers} />
      </View>
    );
  }
}

const Query = gql`
  query follower($username: String!) {
    getFollowCount(username: $username) {
      follower_count
      following_count
    }
    getFollowers(username: $username, limit: 1000) {
      follower
    }
  }
`;

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    // TODO: Fetch the user in an api call via a thunk in redux.
    username: state.auth.username
  };
};

export default connect(mapStateToProps)(
  graphql(Query, {
    options: props => ({
      variables: { username: props.username }
    })
  })(FollowerScene)
);

// Styles
const style = {
  container: {
    backgroundColor: "white",
    height: "100%",
    padding: 5
  },
  header: {
    textAlign: "center"
  }
};
