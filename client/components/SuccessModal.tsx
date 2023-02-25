import React from 'react'
import styled from "styled-components";
import Image from 'next/image';

type Props = {}

const Modal = styled.article`
background-color: white;
display: flex; 
justify-content: center; 
flex-direction: column;


`

const Container = styled.section`
position: absolute;
z-index: 200;
align-items: center;
width: auto;
height: auto%;
`

const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
font-size: 100%;
color: black;
`


function SuccessModal({}: Props) {
  return (
    <Container>

    <Modal>
        <Image src="/../public/assets/pexels-august-de-richelieu-4262414.jpg" alt="#" width="500px" height="500px" style={{"display": "inline-block"}}/>
      <Text>
        <h2>Well done</h2>
        
        <p>You discovered the word</p>
      </Text>



    </Modal>
    </Container>
  )
}

export default SuccessModal