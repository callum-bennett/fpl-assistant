import { FETCH_ALL } from "../actions/types";
import { arrayToObjectByKey } from "../../utils";

const initialState = {
  byId: {},
  allIds: [],
  current: null
};

const gameweekReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      const gameweeksById = arrayToObjectByKey(action.payload.events);
      const currentGameweek = action.payload.events.find(item => item.is_current);
      return {
        ...state,
        current: currentGameweek,
        byId: gameweeksById,
      };
    }

    default:
      return state;
  }
};

export default gameweekReducer;
