import { combineReducers } from "redux";

import teamReducer from "./teamReducer";
import playerReducer from "./playerReducer";
import gameweekReducer from "./gameweekReducer";
import managerReducer from "./managerReducer";

export default combineReducers({
  gameweeks: gameweekReducer,
  managers: managerReducer,
  teams: teamReducer,
  players: playerReducer,
});
