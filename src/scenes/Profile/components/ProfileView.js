import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
// import SignIn from "insteem/src/scenes/Auth/SignIn";

const ProfileView = props => {
  return (
    <View style={styles.container}>
      {props.isSignedIn ? (
        <View>
          <Text style={styles.username}>@{props.username}</Text>
          <Button onPress={e => props.onSignout(e)} title="Sign out" />
        </View>
      ) : (
        <SignIn />
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  username: state.auth.username
});

export default connect(mapStateToProps)(ProfileView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  username: {
    textAlign: "center",
    fontSize: 20
  },
  tabBarIcon: {
    width: 26,
    height: 26
    // width: _.get(config, "tabBar.icon.width"),
    // height: _.get(config, "tabBar.icon.height")
  }
});
