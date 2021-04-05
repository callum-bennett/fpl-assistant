import { FETCH_ALL } from "../actions/types";
import { arrayToObjectByKey } from "../../utils";

const initialState = {
  byId: {},
  allIds: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      const playersById = arrayToObjectByKey(action.payload.elements);
      return {
        ...state,
        byId: playersById,
      };
    }

    default:
      return state;
  }
};

export default playerReducer;
