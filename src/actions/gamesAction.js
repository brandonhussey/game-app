import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchResultsURL,
} from "../Api";

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const loadSearch = (game_name) => async (dispatch) => {
  const searchResults = await axios.get(searchResultsURL(game_name));
  dispatch({
    type: "SEARCH_RESULTS",
    payload: {
      searched: searchResults.data.results,
    },
  });
};
