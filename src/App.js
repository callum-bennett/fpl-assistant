import "./App.css";
import { useEffect, useState } from "react";
import apiClient from "./api/client";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await apiClient.get("/");
      setTeams(res.data.teams);
    }
    fetchData();
  }, []);

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
