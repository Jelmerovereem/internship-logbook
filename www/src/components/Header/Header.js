import H1 from "../Headings/H1";
import "../../styles/animations.css";
import Particles from "react-tsparticles";
import { Colors } from "../UI/Colors";

const headerStyle = {
  //backgroundImage: "url('https://images.unsplash.com/photo-1628112602161-b635c8a21378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')",
  backgroundColor: "#265dc6",
  minHeight: "70vh",
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "36px",
  position: "relative",
  zIndex: 0,
};

const headingStyle = {
  position: "fixed",
  zIndex: 2,
};

const particlesInit = (main) => {
  console.log(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const Header = () => {
  return (
    <>
      <header style={headerStyle}>
        <H1 style={headingStyle} classNames="fade-up">
          Jelmer's internship blog
        </H1>
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: Colors.primaryBlue,
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
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
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
      </header>
    </>
  );
};

export default Header;
