import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/DetailAction";
import { Link } from "react-router-dom";
import { resizeImage } from "../util";
import { popup } from "../Animations";

const Game = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(game.id, game.short_screenshots));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={game.id.toString()}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img
          loading="lazy"
          src={resizeImage(game.background_image, 640)}
          alt={game.name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(83, 83, 83, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  background: #2c2c2c;
  &:hover {
    filter: brightness(150%);
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
