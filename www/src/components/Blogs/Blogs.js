import { useState, useEffect } from 'react';
import { get } from "../../modules/serverFetches";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import { Link } from 'react-router-dom';
import { Loading } from '../UI';

const BlogsData = async () => {
    const response = await get({url: "/blogs"});
    return response;
}

const Blogs = () => {
    const [loadedBlogs, setLoadedBlogs] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        BlogsData().then((res) => {
            setTimeout(() => setLoadedBlogs(true), 2000)
            //setLoadedBlogs(true)
            
            setBlogs((res.blogs.filter(b => b.publish)))
        })
    }, [])


    return (
        <>
        {loadedBlogs ?
            <div>
                {blogs.length > 0
                ?
                blogs.map((blog, i) => {
                    return (
                        <Fade bottom={i%4 === 0} left={i%4 === 1} right={i%4 === 2} top={i%4 === 3} key={blog._id}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "300px", borderBottom: "1px solid lightgrey"}}>
                                <h2>{blog.blogTitle}</h2>
                                <p>{blog.blogContent}</p>
                                <Link to={`/blog/${blog._id}`} >Lees meer</Link>
                            </div>
                        </Fade>
                    )
                })
                :
                <div>
                    <p>Er zijn helaas nog geen posts</p>
                </div>
                 }
            </div>
            :
            <Loading />
        }
        </>
    )
}

export default Blogs;