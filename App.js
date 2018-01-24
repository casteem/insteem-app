import React from "react";
import { SafeAreaView } from "react-native";
import client from "./src/graphql/client";
import { ApolloProvider } from "react-apollo";
import { StyleSheet, View } from "react-native";
import { persistStore, persistCombineReducers } from "redux-persist";
import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import reducers from "./src/services/reducer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { connect } from "react-redux";
import { compose, branch, renderComponent, withProps } from "recompose";

import MainNavigator from "./src/components/Navigation/MainNavigator";
import PublicNavigator from "./src/components/Navigation/PublicNavigator";

const config = {
  key: "root",
  storage
};

// const reducer = persistCombineReducers(config, reducers);

// function configureStore() {
const store = createStore(reducers);
const persistor = persistStore(store);
// return { persistor, store };
// }

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username
  };
};

// TODO: State change doesn't trigger rerender. Solve it.
const Switch = connect(mapStateToProps)(
  branch(
    props => {
      return props.isSignedIn && props.username;
    },
    renderComponent(MainNavigator),
    renderComponent(PublicNavigator)
  )(View)
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ApolloProvider client={client}>
            <SafeAreaView style={styles.safeArea}>
              {/*<MainNavigator />*/}
              {/*<PublicNavigator />*/}
              <Switch />
            </SafeAreaView>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}

// export default connect(mapStateToProps)(App);
export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
