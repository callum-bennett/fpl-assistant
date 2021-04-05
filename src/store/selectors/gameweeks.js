export const getCurrentGameweek = (state) => {
  return state.gameweeks.current ?? null;
}