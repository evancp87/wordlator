import React from 'react'
import styled from "styled-components";

type Props = {}
const Navigation = styled.nav`
width: 100vw;
height: 10rem;
display: flex;
justify-content: center;
align-items: center;
background-color: #D9D9D9;
`

const Title = styled.h1`
font-size: 3rem;
color: #000000;
font-weight: 500;
text-transform: uppercase;

`
function Nav({}: Props) {
  return (
    <Navigation>
        <Title>Wordle</Title>
        </Navigation>
  )
}

export default Nav