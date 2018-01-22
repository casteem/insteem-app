import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loader = () => (
  <View style={style.container}>
    <View>
      <ActivityIndicator size="large" style={style.activityIndicator} />
    </View>
  </View>
);

export default Loader;

const style = {
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  }
};
