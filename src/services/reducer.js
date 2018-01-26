/*
 This file controls the shape of the default state.

 It imports all the various reducers and combines them using the
 `combineReducers()` API from redux.
 */

import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth/reducer";
import stories from "./stories/reducer";

const config = {
  key: "root",
  storage
};

const reducer = persistCombineReducers(config, { auth, stories });

export default reducer;
