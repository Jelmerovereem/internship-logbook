import { HeaderImageStyle, HeadingStyle } from "./BlogHeaderStyle";
import Fade from "react-reveal/Fade";

const BlogHeader = (props) => {
    const { blogData } = props;
    const { headerImage, blogTitle } = blogData;

    return (
        <div style={HeaderImageStyle(headerImage)}>
            <Fade bottom>
                <h1 style={HeadingStyle}>{blogTitle}</h1>
            </Fade>
        </div>
    )
}

export default BlogHeader;