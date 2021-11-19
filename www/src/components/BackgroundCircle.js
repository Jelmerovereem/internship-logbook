import styled from "styled-components";
import Zoom from "react-reveal/Zoom";
import { Colors } from "./UI/Colors";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { device } from "../styles/breakpoints";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Wrapper = styled.div`
  position: relative;
  height: 500px;
  top: 5%;
`;

const Dummy = styled.div`
  margin-top: 100%;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 100%;
  //border: 5px dashed ${Colors.primaryDark};
  background-color: ${Colors.codeLightGrey};
  //animation: rotate 100s linear infinite;
`;

const Text = styled.span`
  display: block;
  font-size: 72px;
  color: ${Colors.primaryDark};
  font-weight: bolder;
  //transform: translateY(550px);
  //transform: translateY(100%);
  //opacity: 0;
  transition: all 1s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  z-index: 3;

  @media ${device.tablet} {
    font-size: 7vw;
  }

  &.showText {
    //opacity: 1;

    span {
      //animation: text-clip-color 3s forwards;
    }
  }
`;

const AnimationSpan = styled.span``;

const BackgroundCircleEl = (props) => {
  const { animation } = props;
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef(null);
  const spanRef = useRef(null);
  const containerRef = useRef(null);
  
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.6,
  // });

  useEffect(() => {
    const spanAnimation = gsap.timeline({
      //paused: true,
    })

    const textTimeline = gsap.timeline({
      paused: true,
      onComplete: () => spanAnimation.play(),
    });

    textTimeline.fromTo(textRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    }, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    })

    textTimeline.fromTo(spanRef.current, {
      color: Colors.primaryDark,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    }, {
      color: Colors.primaryDark,
      background: "transparent",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    }, ">+=1")

    textTimeline.to(spanRef.current, {
      background: Colors.primaryDark,
      color: "white",
    })

    //textTimeline.duration(3);

    ScrollTrigger.create({
      markers: false,
      start: "center center",
      trigger: textRef.current,
      onToggle: self => {
        if (self.isActive) {
          textTimeline.play();
        }
      },
    })
  })

  const Container = styled.div`
    pointer-events: none;
    transition: all 2s;
    width: 95%;
    display: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -7%);
    animation: ${animation ? "bounceSmallReverse 1s forwards" : "none"};
    z-index: 2;

    &.inView {
      ${animation
        ? `animation: bounceSmall 1s forwards;`
        : `width: 45%;
          top: 50%;
          transform: translate(-50%, -50%);`}
    }

    &.afterView {
      //animation: growBig 1s forwards;
      div:last-child {
        //background: red;
      }
    }
  `;

  useEffect(() => {
    // if (animation) {
    //   window.addEventListener("scroll", () => {
    //     const topPos = containerRef.current.getBoundingClientRect().top;
    //     const scrollPos = window.scrollY;
    //     if (topPos < 150 && scrollPos < 750) {
    //       containerRef.current.classList.remove("afterView");
    //       containerRef.current.classList.add("inView");
    //       setTimeout(() => {
    //         containerRef.current.scrollIntoView({
    //           behavior: "smooth",
    //           block: "center",
    //         });
    //         setTimeout(() => {
    //           textRef.current.classList.add("showText");
    //           //document.body.style.overflow = "hidden";
    //         }, 1000);
    //       }, 1100);
    //     }
    //     if (topPos < 0 || topPos > 850) {
    //       containerRef.current.classList.remove("inView");
    //     }
    //     if (topPos < 0 && scrollPos > 1400) {
    //       containerRef.current.classList.add("afterView");
    //     }
    //     if (scrollPos < 1400) {
    //       containerRef.current.classList.remove("afterView");
    //     }
    //   });
    // }
  });

  return (
    <Wrapper>
      <Container ref={containerRef} className={!animation ? "inView" : ""}>
        <Dummy />
        <Inner />
      </Container>
      <Text ref={textRef} className={!animation ? "showText" : ""}>
        Welcome to <br /> my <AnimationSpan ref={spanRef}>internship</AnimationSpan> blog at{" "}
        <br /> code d'azur!
      </Text>
    </Wrapper>
  );
};

export default BackgroundCircleEl;
