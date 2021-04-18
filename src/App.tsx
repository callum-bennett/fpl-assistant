import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchAll from "./store/actions/fetchAll";
import fetchManager from "./store/actions/fetchManager";
import { getTeamsAsArray } from "./store/selectors/teams";
import { getCurrentGameweek } from "./store/selectors/gameweeks";
import TeamList from "./components/Team/List";
import { getCurrentManager } from "./store/selectors/managers";
import Card from "./components/UI/Card";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const teams = useSelector(getTeamsAsArray);
  const currentGameweek = useSelector(getCurrentGameweek);
  const currentManager = useSelector(getCurrentManager);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchAll());
      dispatch(fetchManager());
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>{currentGameweek && `Current gameweek: ${currentGameweek.name}`}</h2>
      {teams && <TeamList teams={teams} />}
      {currentManager && <Card>{currentManager.name}</Card>}
    </div>
  );
};

export default App;
