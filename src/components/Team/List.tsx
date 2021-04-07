import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Team } from "../../types/Team";

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> = (props) => {
  const renderItem = (team: Team) => {
    return <ListItem key={team.name}>{team.name}</ListItem>;
  };

  return <List>{props.teams.map((team) => renderItem(team))}</List>;
};

export default TeamList;
