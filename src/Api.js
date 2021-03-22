//******API key (move later)******
const key = "7f7ff85ecff54920a771cb0d065bc5c9";

//******Base URL******
const base_url = `https://api.rawg.io/api/`;

//******Setting things up with functions/variables******

const getCurrentMonth = () => {
  const month = new Date().getMonth();

  return month < 10 ? `0${month + 1}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = [currentYear, currentMonth, currentDay].join("-");

const lastYear = [currentYear - 1, currentMonth, currentDay].join("-");
const nextYear = [currentYear + 1, currentMonth, currentDay].join("-");

//Popular games

const popularGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;

//Upcoming games

const upcomingGames = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;

//New games

const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const newGamesURL = () => `${base_url}${newGames}`;

//Game details

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${key}`;

//searched games

export const searchResultsURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
