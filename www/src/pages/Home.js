import HeaderEl from "../components/Header/Header";
import BlogsEl from "../components/Blogs/Blogs";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import BackgroundCircleEl from "../components/BackgroundCircle";
import { TitleQoute, LargeImageBlockEl, AbsoluteTitle } from "../components/UI";
import styled from "styled-components";

const Main = styled.main`
  background: white;
  position: relative;
  z-index: 1;
  //height: 5000px;
`;

const BelowCircle = styled.div`
  //margin-top: 400px;
  position: relative;
`;

const Home = () => {
  return (
    <div>
      <HeaderEl />
      <Main>
        <BackgroundCircleEl animation={false} />
        {/* <TitleQoute>Stand out. Fit in.</TitleQoute> */}
        <BelowCircle>
          <LargeImageBlockEl />
          <AbsoluteTitle>My blogs</AbsoluteTitle>
          <BlogsEl />
        </BelowCircle>
      </Main>
    </div>
  );
};

export default Home;
