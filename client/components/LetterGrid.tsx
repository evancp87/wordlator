import React from 'react'
import styled from "styled-components";
type Props = {}

const LetterContainer = styled.section`
display: grid;
grid-template-rows: repeat(5, 1fr);
grid-gap: 5px;
align-items: center;
// @media (max-width: 768px) {

// }

`

const LetterRow = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 5px;


`

const Letter = styled.div`
max-width: 100%;
border: 2px solid black;
padding: 2rem;
background-color: white;
&:hover {
  cursor: pointer
}
display: block;
height: auto;
max-width: 100%;
width: clamp(0.1rem, 0.475rem + 0.4vw, 1.125rem);



`

function LetterGrid({}: Props) {

  const board = [
    [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
    [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
    [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
    [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
    [{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"},{letter:"",status:"white"}],
    ]

    
  return (
    
<LetterContainer>
        {board.map((row, index) =>
          <LetterRow key={index}>
            {row.map((block, i) => (
              <Letter key={i}  />
            ))}
          </LetterRow>
        )}
      </LetterContainer>

  )
}

export default LetterGrid