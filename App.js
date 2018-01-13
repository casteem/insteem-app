import React from "react";
import { SafeAreaView } from "react-native";
import client from "./src/graphql/client";
import { ApolloProvider } from "react-apollo";
import { StyleSheet, View } from "react-native";

import MainNavigator from "./src/components/Navigation/MainNavigator.js";
import StoriesScene from "./src/scenes/Stories/StoriesScene";

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={styles.safeArea}>
          <MainNavigator />
        </SafeAreaView>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
