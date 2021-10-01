import "../../styles/animations.css";
import Particles from "react-tsparticles";
import { Colors } from "../UI/Colors";
import styled from "styled-components";
import Logo from "../../assets/logo.js";

const Header = styled.header`
  /*backgroundImage: url('https://images.unsplash.com/photo-1628112602161-b635c8a21378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80');*/
  //background-color: #265dc6;
  background-color: white;
  //min-height: 100vh;
  //height: fit-content;
  width: 100%;
  padding-bottom: 55%;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  position: relative;
  z-index: 0;
`;


const PContainer = styled.p`
  margin: 0;
  display: inline-block;
  position: fixed;
  top: 0;
  right: 0;
  text-align: right;
  font-weight: bolder;
  line-height: 0.8;
  font-size: 21vw;
  text-transform: uppercase;
  color: ${Colors.primaryDark};

  div {
    position: relative;
    right: 50%;
    animation: slide-right 1s 1.2s ease both,
      text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;

    img {
      width: 17%;
      height: auto;
    }
  }

  div:nth-last-child(-n + 2) {
    color: ${Colors.codeLightBlue};
  }
`;

const CodeAndLogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const LogoContainer = styled.div`
  display: inline-block;
  width: 16%;

  &:hover {
    path:nth-child(4) {
      opacity: 1;
      animation: text-clip 1s;
    }
    &:after {
      transform: scale(1);
    }
  }

  &:after {
    display: none;
    transition: all .5s;
    content: "";
    position: absolute;
    border-radius: 50%;
    // width: 43%;
    // height: 32%;
    width: 65px;
    height: 65px;
    top: 14%;
    right: 3%;
    background: red;
    //transform: scale(.1);
}
`;

const HeaderEl = () => {
  return (
    <>
      <Header>
        {/* <Title>
          <CafeInner>Intern</CafeInner>
          <MozartInner>code d'azur</MozartInner>
        </Title> */}
        <PContainer>
          <div>Intern</div>
          <CodeAndLogoContainer>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            code
          </CodeAndLogoContainer>
          <div>d'azur</div>
        </PContainer>
        {/* <SVG width="100%" height="100%">
          <defs>
            <style>
              @import url("https://fonts.googleapis.com/css?
              family=Lora:400,400i,700,700i");
            </style>
          </defs>
          <text x="39%" y="60%" text-anchor="right">
            code
          </text>
          <text x="19%" y="90%" text-anchor="right">
            d'azur
          </text>
        </SVG> */}
        {/* <HeaderHeading className="">
          Internship
          <br />
          <img src={logo} alt="company logo" />
          at
          <br />
          <BrandSpan>code d'azur</BrandSpan>
        </HeaderHeading> */}
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#fff",
              },
            },
            fpsLimit: 30,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 10,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000",
              },
              links: {
                color: "#000",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 20,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        /> */}
      </Header>
    </>
  );
};

export default HeaderEl;
