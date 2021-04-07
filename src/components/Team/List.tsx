import React from "react";
import { List, ListItem } from "@material-ui/core";

interface TeamListProps {
  teams: {}[];
}

const TeamList: React.FC<TeamListProps> = (props: any) => {
  const renderItem = (team: any) => {
    return <ListItem key={team.code}>{team.name}</ListItem>;
  };

  return <List>{props.teams.map((team: any) => renderItem(team))}</List>;
};

export default TeamList;
