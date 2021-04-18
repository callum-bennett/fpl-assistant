import { FETCH_MANAGER } from "../actions/types";

const initialState = {
  current: null
};

const managerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MANAGER: {
      return {
        ...state,
        current: action.payload,
      };
    }

    default:
      return state;
  }
};

export default managerReducer;
