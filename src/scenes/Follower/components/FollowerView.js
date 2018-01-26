import React from "react";
import { View, FlatList, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

import FollowerListItem from "insteem/src/scenes/Follower/components/FollowerListItem";

const _keyExtractor = (item, index) => item.follower;

const FollowerView = props => {
  const { followers, navigation } = props;
  return (
    <FlatList
      data={followers}
      keyExtractor={_keyExtractor}
      renderItem={follower => (
        <FollowerListItem
          key={follower.follower}
          follower={follower.item}
          navigation={navigation}
        />
      )}
    />
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  username: state.auth.username
});

export default connect(mapStateToProps)(FollowerView);

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
