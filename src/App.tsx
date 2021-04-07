import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchAll from "./store/actions/fetchAll";
import { getTeamsAsArray } from "./store/selectors/teams";
import { getCurrentGameweek } from "./store/selectors/gameweeks";

function App() {
  const dispatch = useDispatch();
  const teams = useSelector(getTeamsAsArray);
  const currentGameweek = useSelector(getCurrentGameweek);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchAll());
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <h2>{currentGameweek && `Current gameweek: ${currentGameweek.name}`}</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.code}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
