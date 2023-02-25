import React from 'react';
import GameScreen from "../screens/GameScreen";
import styled from "styled-components";

const GameWidth = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
`
function Game() {
  return (
    <GameWidth><GameScreen/></GameWidth>
  )
}

export default Game