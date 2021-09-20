import { useState } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    width: "100%",
    height: "100%",
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const ArticleCard = (props) => {
    const {href, blogData} = props;
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        width: "300px",
        height: "500px",
        background: "linear-gradient(180deg, rgba(90,133,255,1) 0%, rgba(153,179,255,1) 100%)",
        color: "white",
        margin: "0 50px",
        borderRadius: "10px",
        padding: "30px",
        transition: "transform 2s",
        transform: "scale(1)"
    }

    const textContainerStyle = {
        transform: "translateY(0)",
        transition: "transform 0.5s",
    }

    const textStyle = {
        fontSize: "20px",
        fontWeight: "bolder",
        textAlign: "center",
    }

    isHovered ? textContainerStyle.transform = "translateY(-15px)" : textContainerStyle.transform = "translateY(0)";

    return (
        <div style={cardStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <Link to={href} style={linkStyle}>
                <div style={textContainerStyle}>
                    <p style={textStyle}>{blogData.blogTitle}</p>
                    <span>{blogData.viewersCount}</span>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard;