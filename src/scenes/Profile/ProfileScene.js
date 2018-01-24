import React from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { signout } from "../../../src/services/auth/actions";
import { View, ListView, Text, Button, StyleSheet, Image } from "react-native";
// import SignIn from "../Auth/SignIn.js";
import Loader from "insteem/src/components/Elements/Loader.js";
import Icon from "react-native-vector-icons/Ionicons";
import ProfileView from "./components/ProfileView";
// import PostItem from "../Posts/components/PostItem/PostItem";

// Show the user profile.
class ProfileScene extends React.Component {
  // Configure options for the navigation component.
  static navigationOptions = {
    title: "Profile"
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={<Icon name="rocket" />}
    //     style={[styles.tabBarIcon, { tintColor: tintColor }]}
    //   />
    // )
  };

  render() {
    const {
      data: { loading, account: user, getFollowCount: followCount }
    } = this.props;
    if (loading) return <Loader />;
    return (
      <ProfileView
        user={user}
        onSignout={this.props.onSignout}
        followCount={followCount}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignout: () => {
      dispatch(signout());
    }
  };
};

const Query = gql`
  query user($username: String!) {
    account(username: $username) {
      name
      json_metadata
      voting_power
      reputation
      post_count
      created
      reputation
    }

    getFollowCount(username: $username) {
      follower_count
      following_count
    }
  }
`;

ProfileScene.navigationOptions = {
  title: "Profile",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-contact" size={30} color={tintColor} />
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(Query, {
    options: props => ({
      variables: { username: props.username },
      // Poll every 5 minutes.
      pollInterval: 5 * 60 * 1000
    })
  })(ProfileScene)
);
