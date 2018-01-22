import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { View, Text, Alert, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Button = styled(Icon)`
  font-size: 16px;
  margin-right: 5px;
`;

const Votes = styled.Text`
  font-size: 16px;
`;

class VoteButton extends React.Component {
  render() {
    const { votes } = this.props;
    return (
      <Container>
        <View>
          <TouchableHighlight>
            <Button name="ios-arrow-dropup" />
          </TouchableHighlight>
        </View>
        <View>
          <Votes>
            {/* TODO: Add singular/plural version*/}
            {votes}
          </Votes>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  wif: state.auth.wif,
  voter: state.auth.username
});

export default connect(mapStateToProps)(VoteButton);
