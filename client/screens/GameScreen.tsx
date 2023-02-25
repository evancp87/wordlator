import React from 'react'
import styled from "styled-components";
import Keyboard from "../components/Keyboard";
import LetterGrid from '../components/LetterGrid';
import FailureModal from "../components/FailureModal";
const Screen = styled.main`
max-width: 500px;
width: 360px;
background-color: #0000;
padding-top: 3rem;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
flex: 1 1 auto;
position: relative;
z-index: 100;
`
;



type Props = {}




function GameScreen({}: Props) {
  return (
 
    <Screen>
      <FailureModal/>
   <LetterGrid/>
    <Keyboard/>
    </Screen>
   
  )
}

export default GameScreen