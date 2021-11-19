import styled from "styled-components";

const outerContainerStyle = {
    margin: "200px auto 0",
}

const wrapperStyle = {
  flex: 1,
  display: "flex",
  overflowX: "auto",
  width: "700px",
  margin: "0 auto",
};

const containerStyle = {
  display: "flex",
};

const SliderTitle = styled.p`
  text-align: center;
`

const ArticleSlider = (props) => {
  const { children } = props;

  return (
    <div style={outerContainerStyle}>
      <SliderTitle>Lees ook...</SliderTitle>
      <div style={wrapperStyle}>
        <div style={containerStyle}>{children}</div>
      </div>
    </div>
  );
};

export default ArticleSlider;
