import "../../styles/animations.css";

const backgroundTextsContainer = {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
}

const randomValue = (min, max) => {
    if (!max) max = 100;
    if (!min) min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const textsStyle = {
    position: "absolute",
    fontSize: "36px",
    fontWeight: "bolder",
    color: "#143c88",
    opacity: "0.3",
}

const BackgroundTexts = () => {
    return (
        <div style={backgroundTextsContainer}>
                <span style={{
                    ...textsStyle,
                    ...{
                        top: `${randomValue(0, 85)}%`,
                        left: `${randomValue(0, 85)}%`,
                        fontSize: `${randomValue()}px`,
                        animation: `slide-right ${randomValue(20, 50)}s forwards`
                    }
                }}>Development</span>
                <span style={{
                    ...textsStyle,
                    ...{
                        top: `${randomValue(0, 85)}%`,
                        left: `${randomValue(0, 85)}%`,
                        fontSize: `${randomValue()}px`,
                        animation: `slide-right ${randomValue(20, 50)}s forwards`
                    }
                }}>Internship</span>
                <span style={{
                    ...textsStyle,
                    ...{
                        top: `${randomValue(0, 85)}%`,
                        left: `${randomValue(0, 85)}%`,
                        fontSize: `${randomValue()}px`,
                        animation: `slide-right ${randomValue(20, 50)}s forwards`
                    }
                }}>code d'azur</span>
                <span style={{
                    ...textsStyle,
                    ...{
                        top: `${randomValue(0, 85)}%`,
                        left: `${randomValue(0, 85)}%`,
                        fontSize: `${randomValue()}px`,
                        animation: `slide-right ${randomValue(20, 50)}s forwards`
                    }
                }}>CMD</span>
            </div>
    )
}

export default BackgroundTexts;