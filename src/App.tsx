import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchAll from "./store/actions/fetchAll";
import { getTeamsAsArray } from "./store/selectors/teams";
import { getCurrentGameweek } from "./store/selectors/gameweeks";
import TeamList from "./components/Team/List";

const App: React.FC = () => {
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
    <div>
      <h2>{currentGameweek && `Current gameweek: ${currentGameweek.name}`}</h2>
      {teams && <TeamList teams={teams} />}
    </div>
  );

};

export default App;
