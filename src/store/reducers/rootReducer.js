import { combineReducers } from "redux";

import teamReducer from "./teamReducer";
import playerReducer from "./playerReducer";
import gameweekReducer from "./gameweekReducer";

export default combineReducers({
  gameweeks: gameweekReducer,
  teams: teamReducer,
  players: playerReducer,
});
