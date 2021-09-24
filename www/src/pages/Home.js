import Header from "../components/Header/Header";
import Blogs from "../components/Blogs/Blogs";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";

const Home = () => {
    
    return (
        <div>
            <Link to="/admin">Admin quick link</Link>
            <Header />
            <main
                style={{
                    background: "white",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Fade bottom duration={2000}>
                    <Blogs />
                </Fade>
            </main>
        </div>
    )
}

export default Home;