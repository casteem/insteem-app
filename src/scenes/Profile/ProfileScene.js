import React from "react";
import { connect } from "react-redux";
import steem from "steem";
import { signout } from "../../../src/services/auth/actions";
import { View, ListView, Text, Button, StyleSheet, Image } from "react-native";
// import SignIn from "../Auth/SignIn.js";
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
    return <ProfileView onSignout={this.props.onSignout} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    // TODO: Fetch the user in an api call via a thunk in redux.
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
ProfileScene.navigationOptions = {
  title: "Profile",
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-contact" size={30} color={tintColor} />
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScene);
