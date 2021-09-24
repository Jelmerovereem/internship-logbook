import Fade from "react-reveal/Fade";
import { blogContentStyle } from "./BlogContentStyle";

const BlogContent = (props) => {
  const { blogContent } = props;

  return (
    <Fade bottom>
      <div style={blogContentStyle} dangerouslySetInnerHTML={{ __html: blogContent }} />
    </Fade>
  );
};

export default BlogContent;
