const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "SEARCH_RESULTS":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
