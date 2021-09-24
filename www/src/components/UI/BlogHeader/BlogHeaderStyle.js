import { Colors } from "../Colors";

const HeaderImageStyle = (src) => ({
    width: "100%",
    height: "400px",
    background: `url(${src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    boxShadow: `inset 0 0 0 1000px ${Colors.primaryBlueTransparent}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
})

const HeadingStyle = {
    color: "white",
    fontSize: "72px"
}

export { HeaderImageStyle, HeadingStyle };