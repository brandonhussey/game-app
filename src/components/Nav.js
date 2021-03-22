import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const searchHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(loadSearch(textInput));
    setTextInput("");
  };

  return (
    <StyledNav>
      <Logo>
        {/* <img src={logo} alt="logo" /> */}
        <h2>Project Sparrow</h2>
      </Logo>
      <Search onSubmit={submitSearch}>
        <input value={textInput} onChange={searchHandler} type="text" />
        <button type="submit">Search</button>
      </Search>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
`;

const Logo = styled(motion.div)`
  padding: 3rem;
`;

const Search = styled(motion.form)`
  display: inline-flex;
  position: relative;
  input {
    width: 30rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    padding-left: 1rem;
  }
  button {
    font-size: 1.5rem;
    border-radius: 0rem 1rem 1rem 0rem;
    border: none;
    padding: 0rem 1rem;
    background: #c5c5c5;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export default Nav;
