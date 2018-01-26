// The reducers for Story related actions.
import * as ActionTypes from "./actions";
import _ from "lodash";

// Initial empty Story object.
const empty = {};

// An empty new post.
const defaultState = {
  title: "",
  body: "",
  tags: ""
};

const reducer = function(state = empty, action) {
  const { type, payload } = action;
  switch (type) {
    // Submit the post to steem api.
    // TODO: Impplement in api thunk.
    case ActionTypes.SUBMIT_STORY:
      const { title, body, tags } = payload;
      return _.extend({}, defaultState, {
        title: title,
        body: body,
        tags: tags
      });
    // Update the Story in the store.
    case ActionTypes.UPDATE_STORY:
      const { value } = payload;
      return _.extend({}, state, {
        ...value
      });

    case ActionTypes.CLEAR_STORY:
      return _.extend({}, defaultState);

    default:
      return state;
  }
};

export default reducer;
