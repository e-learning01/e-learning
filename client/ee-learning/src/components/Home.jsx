import React from 'react'
import image from '../assets/hero.png'
import bg from '../assets/bg.png'
import styled from 'styled-components'
import HeroText from './HeroText'
import Nav from './Nav'
// import Tilty from 'react-tilty';


function Home() {
  return (
  <div>
    <Nav/>
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
          <HeroText/>
          </Left>
          {/* <TiltWrapper tiltMaxAngleX={25} tiltMaxAngleY={25}> */}
          <Img src={image} alt="@gouthamgtronics" />
          {/* </TiltWrapper> */}
           
        </InnerWrapper>
      </Wrapper>
    </Container>
    </div>
    
  )
}
const Left = styled.div`
  width: 40%;
 
`;

// const TiltWrapper = styled(Tilty)`
//   width: 60%;
//   min-width: 400px;
//   @media (max-width: 670px) {
//     display: none;
//   }
// `;

const Img = styled.img`
width: 60%;
min-width: 400px;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
  background-color: rgba(255, 255, 255, 0.9);
   @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  background-image: url(${({ bg }) => bg});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
`;

export default Home