import React from 'react'
import styled from "styled-components";
import Image from 'next/image';



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



type Props = {}

function StatsModal({}: Props) {
  
      
        return (
          <Container>
      
          <Modal>
            <Text>
              <h2>Game Stats</h2>
            
            </Text>
              <Image src="/../public/assets/pexels-august-de-richelieu-4262414.jpg" alt="#" width="500px" height="500px" style={{"display": "inline-block"}}/>
      
              <Text>
<ul>
  <li>Played<span></span></li>
  <li>Won<span></span></li>
  <li>Current Streak<span></span></li>
  <li>Max Streak<span></span></li>
</ul>           
 </Text>
      
          </Modal>
          </Container>
        )
       


   
  
}




export default StatsModal