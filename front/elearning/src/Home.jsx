import React, { useEffect } from "react";
import image from "./assets/hero.png";
import bg from "./assets/bg.png";
import styled from "styled-components";
import HeroText from "./HeroText";
import img from "./assets/p1.png";
import img1 from "./assets/p2.png";
import img2 from "./assets/p3.png";
import Nav from "./Nav";
import "./App.css";
import { useAuth } from "./Auth";
// import Tilty from 'react-tilty';

function Home() {
  const isconnected = useAuth((state) => state.connected);
  const connect = useAuth((state) => state.connect);
  const logg = useAuth((state) => state.logg);

  return (
    <div>
      <Nav />

      <Container bg={bg}>
        <Wrapper>
          <InnerWrapper>
            <Left>
              <HeroText />
            </Left>
            {/* <TiltWrapper tiltMaxAngleX={25} tiltMaxAngleY={25}> */}
            <Img src={image} alt="@gouthamgtronics" />
            {/* </TiltWrapper> */}
          </InnerWrapper>
        </Wrapper>
      </Container>
      <div class="team-section">
        <div class="inner-width">
          <h1>What others said about us</h1>
          <div class="pers">
            <div class="pe">
              <ImgBott src={img} alt="" />

              <div class="p-name">
                Dhia : i always thought that i was a master of react , until i
                found the course provided by mr ahmed ! just wow
              </div>

              <div class="p-des">senior developer</div>
            </div>

            <div class="pe">
              <ImgBott src={img1} alt="" />
              <div class="p-name">
                Hadil : finally i can live mybest life and teach from everywhere
              </div>
              <div class="p-des">English Teacher</div>
            </div>

            <div class="pe">
              <ImgBott src={img2} alt="" />
              <div class="p-name">
                Ali : thanks guys for this incredible platform
              </div>
              <div class="p-des">Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
const ImgBott = styled.img`
  border-radius: 50%;
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

export default Home;
