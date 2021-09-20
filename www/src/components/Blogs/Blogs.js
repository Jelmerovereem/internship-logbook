import { useState, useEffect } from 'react';
import { get } from "../../modules/serverFetches";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const BlogsData = async () => {
    const response = await get({url: "/blogs"});
    return response;
}

const Blogs = () => {
    const [loadedBlogs, setLoadedBlogs] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        BlogsData().then((res) => {
            setTimeout(() => {
                setLoadedBlogs(true)
            }, 1000)
            
            setBlogs((res.blogs.filter(b => b.publish)))
        })
    }, [])


    return (
        <>
        {loadedBlogs ?
            <div>
                <p>Loaded</p>
                {blogs.length > 0
                ?
                blogs.map(blog => {
                    console.log(blog)
                    return (
                        <Fade bottom cascade key={blog._id}>
                            <h2>{blog.blogTitle}</h2>
                            <p>{blog.blogContent}</p>
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
            <Pulse forever>
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        background: "lightblue",
                        margin: "auto"
                    }}
                ></div>
            </Pulse>
        }
        </>
    )
}

export default Blogs;