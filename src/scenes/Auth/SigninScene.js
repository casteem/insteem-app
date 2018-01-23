import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { signin } from "../../services/auth/actions.js";
import steem from "steem";
import styled from "styled-components/native";

const Disclaimer = styled.Text`
  color: gray;
  margin-top: 10px;
`;

// SignIn Form.
class SigninScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      wif: ""
    };
  }

  signin() {
    const wif = steem.auth.toWif(this.state.username, this.state.password, [
      "posting"
    ]);
    this.props.onSignin(this.state.username, this.state.password, wif);
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        <TextInput
          style={style.input}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          spellCheck={false}
          placeholder="Username"
          clearButtonMode="while-editing"
        />
        <TextInput
          style={style.input}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
          placeholder="Password"
          clearButtonMode="while-editing"
        />
        <Button onPress={e => this.signin(e)} title="Signin" />
        <Disclaimer>
          Use your steem username and anything as password for now. No posting
          or curating implemented at the moment so no need to validate user
          credentials. This will be possible soon.
        </Disclaimer>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignin: (username, password, wif) => {
      dispatch(signin(username, password, wif));
    }
  };
};

SigninScene.navigationOptions = {
  title: "Sign In"
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninScene);

// Style for the component.
const style = StyleSheet.create({
  input: {
    height: 40,
    padding: 5,
    borderColor: "silver",
    borderRadius: 5,
    borderWidth: 1,
    margin: 10
  }
});
