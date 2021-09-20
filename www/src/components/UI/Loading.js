import "../../styles/animations.css";

const pulseStyle = {
    background: "rgba(52, 172, 224, 1)",
    width: "50px",
    height: "50px",
    margin: "auto",
    borderRadius: "50%",
    boxShadow: "0 0 0 0 rgba(52, 172, 224, 1)",
    transform: "scale(1)",
}

const Loading = () => {
    return (
        <div style={pulseStyle} className="loading-pulse"></div>
    )
}

export default Loading;