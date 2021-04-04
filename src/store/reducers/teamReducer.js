import { FETCH_ALL } from "../actions/types";

const initialState = [];

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      return action.payload.teams;

    }

    default:
      return state;
  }
};

export default teamReducer;