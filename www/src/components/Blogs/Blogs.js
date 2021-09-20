import { useState, useEffect } from 'react';
import { get } from "../../modules/serverFetches";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';
import { Loading, Dropdown } from '../UI';
import convertDate from '../../modules/convertDate';

const BlogsData = async () => {
    const response = await get({url: "/blogs"});
    return response;
}

const Blogs = () => {
    const [loadedBlogs, setLoadedBlogs] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [sortValue, setSortValue] = useState("date");

    useEffect(() => {
        BlogsData().then((res) => {
            setTimeout(() => setLoadedBlogs(true), 1000)
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
                <>
                <Dropdown onChange={(event) => setSortValue(event.target.value)}>
                    <option value="date">By date</option>
                    <option value="viewersCount">By views</option>
                </Dropdown>
                {blogs.sort((a, b) => {
                    if (sortValue === "date") {
                        return new Date(b.date) - new Date(a.date)
                    } else if (sortValue === "viewersCount") {
                        return b.viewersCount - a.viewersCount
                    }
                }).map((blog, i) => {
                    //console.log(new Date(blog.date))
                    return (
                        <Fade bottom={i%4 === 0} left={i%4 === 1} right={i%4 === 2} top={i%4 === 3} key={blog._id}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "300px", borderBottom: "1px solid lightgrey"}}>
                                <h2>{blog.blogTitle}</h2>
                                <div dangerouslySetInnerHTML={{__html: blog.blogContent}} />
                                <p>{convertDate(new Date(blog.date))}</p>
                                <p>Visitors: {blog.viewersCount}</p>
                                <Link to={`/blog/${blog._id}`} >Lees meer</Link>
                            </div>
                        </Fade>
                    )
                })}
                </>
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