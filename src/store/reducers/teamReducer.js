import { FETCH_ALL } from "../actions/types";
import { arrayToObjectByKey } from "../../utils";

const initialState = {
  byId: {},
  allIds: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      const teamsById = arrayToObjectByKey(action.payload.teams);

      return {
        ...state,
        byId: teamsById,
      };
    }

    default:
      return state;
  }
};

export default teamReducer;
