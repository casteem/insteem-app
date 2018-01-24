import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import steem from "steem";
import moment from "moment";

// import SignIn from "../../../../src/scenes/Auth/SigninScene";

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: white;
`;
const Row = styled.View`
  padding: 10px;
`;

const Content = styled.Text`
  text-align: center;
  font-size: 20px;
`;

const ProfileView = props => {
  const { user, followCount } = props;
  return (
    <Container>
      {props.isSignedIn ? (
        <View>
          <Row>
            <Content>@{user.name}</Content>
          </Row>
          <Row>
            <Content>{JSON.parse(user.json_metadata).profile.about}</Content>
          </Row>
          <Row>
            <Content>
              Location: {JSON.parse(user.json_metadata).profile.location}
            </Content>
          </Row>
          <Row>
            <Content>Post count: {user.post_count}</Content>
          </Row>
          <Row>
            <Content>Follower: {followCount.follower_count}</Content>
          </Row>
          <Row>
            <Content>Following: {followCount.following_count}</Content>
          </Row>
          <Row>
            <Content>
              Reputation: {steem.formatter.reputation(user.reputation)}
            </Content>
          </Row>
          <Row>
            <Content>Voting Power: {user.voting_power / 100}</Content>
          </Row>
          <Row>
            <Content>
              Joined:{" "}
              {moment(user.created)
                .utc()
                .format("LL")}
            </Content>
          </Row>
          <Row>
            <Button onPress={e => props.onSignout(e)} title="Sign out" />
          </Row>
        </View>
      ) : (
        <SignIn />
      )}
    </Container>
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
