import "../../styles/animations.css";
import { Colors } from "./Colors.js";

const pulseStyle = {
    background: Colors.primaryBlue,
    width: "50px",
    height: "50px",
    margin: "auto",
    borderRadius: "50%",
    boxShadow: `0 0 0 0 ${Colors.primaryBlueRGBA}`,
    transform: "scale(1)",
}

const Loading = () => {
    return (
        <div style={pulseStyle} className="loading-pulse"></div>
    )
}

export default Loading;