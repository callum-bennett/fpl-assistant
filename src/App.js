import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchAll from "./store/actions/fetchAll";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchAll());
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <ul>
        {teams.map((team) => (
          <li key={team.code}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
