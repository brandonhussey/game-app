import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  //GET LOCATION
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    if (!path) {
      document.body.style.overflow = "auto";
    }
    dispatch(loadGames());
  }, [dispatch, path]);

  //Get the data
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  const gameDetail = useSelector((state) => state.detail.game.name);

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {path && gameDetail && <GameDetail path={path} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Search results...</h2>
            <Games>
              {searched.map((game) => (
                <Game game={game} key={game.id} />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
