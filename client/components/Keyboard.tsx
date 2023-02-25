// import React, {useState} from 'react'
// import styled from "styled-components";

// type Props = {}

// function Keyboard({}: Props) {
// const Keys = styled.div`
// display: flex;

// flex-direction: row;
// flex-wrap: wrap;
// border: 2px solid black; 
// padding: 2rem;
// border-radius: 0.5em;
// color: black;
// height: 50px;
// width: 50px;
// padding: 1em;
// background-color: #ffff;
// &:hover {
//   cursor: pointer
// }

// `

// const KeyRow = styled.div`
// display: flex;
// flex-direction: row;
// `

// const KeyRowContainer = styled.div`
// display: flex;
// align-items: center;
// flex-direction: column;
// color: black;
// padding-top: 1em;
// padding-bottom: 1em;
// `



//     const keyboardRows = {

//         topRow: ["Q","W","E","R","T","Y","U","I","O","P"],
//         middleRow:["A","S","D","F","G","H","J","K","L"],
//         bottomRow: ["Z","X","C","V","B","N","M","←","Enter"],
//     }
//         return (
// <KeyRowContainer>

// <KeyRow>
// {keyboardRows.topRow.map((letter, index) => (
//   <Keys key={index}>{letter}</Keys>
// ))}
// </KeyRow>
// <KeyRow>
// {keyboardRows.middleRow.map((letter, index) => (
//   <Keys key={index}>{letter}</Keys>
// ))}
// </KeyRow>
// <KeyRow>
// {keyboardRows.bottomRow.map((letter, index) => (
//   <Keys key={index}>{letter}</Keys>
// ))}
// </KeyRow>
    
// </KeyRowContainer>
//   )
// }

// export default Keyboard

import React, {useState} from 'react'
import styled from "styled-components";

const Keys = styled.div `display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap; border: 2px solid black; padding: 2rem; border-radius: 0.5em; background-color: #808080;
color: #ffffff; height: 50px; width: 50px; padding: 1em;  &:hover { cursor: pointer; };
display: block;
height:  auto;
max-width: 100%;
flex : 1;
// width: clamp(0.1rem, 0.475rem + 0.4vw, 1.125rem);
width: 100%;
`
// const Keys = styled.div `display: grid; grid-template-columns: auto;  grid-auto-rows: auto; border: 2px solid black; padding: 2rem; border-radius: 0.5em; color: black; height: 50px; width: 50px; padding: 1em; background-color: #ffff; &:hover { cursor: pointer; };`



const KeyRow = styled.div `display: flex; flex-direction: row;`

const KeyRowContainer = styled.div `display: flex; align-items: center; flex-direction: column; color: black; padding-top: 1em; padding-bottom: 1em;`
// const KeyRowContainer = styled.div `display: grid;  grid-template-columns: repeat(auto, 1fr); grid-auto-rows: auto; color: black; padding-top: 1em; padding-bottom: 1em;`

type Props = {}

function Keyboard({}: Props) {
const keyboardRows = {
topRow: ["Q","W","E","R","T","Y","U","I","O","P"],
middleRow:["A","S","D","F","G","H","J","K","L"],
bottomRow: ["Z","X","C","V","B","N","M","←","Enter"],
}
return (
<KeyRowContainer>
<KeyRow>
{keyboardRows.topRow.map((letter, index) => (
<Keys key={index}>{letter}</Keys>
))}
</KeyRow>
<KeyRow>
{keyboardRows.middleRow.map((letter, index) => (
<Keys key={index}>{letter}</Keys>
))}
</KeyRow>
<KeyRow>
{keyboardRows.bottomRow.map((letter, index) => (
<Keys key={index}>
  {letter}
  </Keys>
))}
</KeyRow>
</KeyRowContainer>
)
}

export default Keyboard