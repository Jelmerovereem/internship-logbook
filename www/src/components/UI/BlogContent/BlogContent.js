import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Content = styled.div`
  width: 80%;
  margin: 100px auto 0;
`

const BlogContent = (props) => {
  const { blogContent } = props;

  return (
    <Fade bottom>
      <Content dangerouslySetInnerHTML={{ __html: blogContent }} />
    </Fade>
  );
};

export default BlogContent;
