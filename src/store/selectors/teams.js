export const getTeamsAsArray = (state) => {
  return Object.keys(state.teams.byId).map((k) => state.teams.byId[k]);
};
