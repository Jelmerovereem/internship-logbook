import Header from "../components/Header/Header";
import Blogs from "../components/Blogs/Blogs";
import {Link} from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <Link to="/admin">Admin quick link</Link>
            <Header />
            <Blogs />
        </div>
    )
}

export default Home;