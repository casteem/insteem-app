import React from "react";
import client from "./src/graphql/client";
import { ApolloProvider } from "react-apollo";
import { StyleSheet, View } from "react-native";

import StoriesScene from "./src/scenes/Stories/StoriesScene";

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <StoriesScene />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
