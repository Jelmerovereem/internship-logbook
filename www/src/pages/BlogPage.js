import { useEffect, useState } from "react";
import { get, put } from "../modules/serverFetches";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";
import {Button, Loading} from "../components/UI";

const getBlog = async id => {
    const response = await get({url: `/blog/${id}`});
    return response;
}

const getAllBlogs = async () => {
    const response = await get({url: "/blogs"});
    return response;
}

const updateCount = async (id, viewersCount) => {
    const response = await put({url: `/blog/${id}`, body: {viewersCount: viewersCount+1 }});
    return response;
}

const BlogPage = (props) => {
    const [blogData, setBlogData] = useState({
        blogTitle: "",
        blogContent: "",
        publish: true,
        viewersCount: 0
    });
    const [blogLoaded, setBlogLoaded] = useState(false);
    const [allBlogs, setAllBlogs] = useState([]);
    const [viewersCount, setViewersCount] = useState(0);
    const { match: {params: {id}} } = props;
    //const {id} = props;

    useEffect(() => {
        getBlog(id).then((res) => {
            setBlogData(res.blogData);
            setBlogLoaded(true);

            updateCount(id, res.blogData.viewersCount).then(response => {
                setViewersCount(res.blogData.viewersCount + 1)
            })
        })

        getAllBlogs().then(res => {
            const filteredBlogs = res.blogs.filter(b => b._id !== id);
            setAllBlogs([...allBlogs, ...filteredBlogs ])
        })
    }, [])

    return (
        <>
            <Link to="/" >Home</Link>
            <p>Blog id: {id}</p>
            {blogLoaded
                ?
                <>
                {Object.keys(blogData).length > 0 &&
                    <Fade bottom>
                        <h1>{blogData.blogTitle}</h1>
                        <p>{blogData.blogContent}</p>
                        <p>Bezoekers: {viewersCount}</p>
                    </Fade>
                }
                {allBlogs.length > 0 ?
                allBlogs.map(blog => {
                    return (
                        <Link key={blog.blogTitle} style={{display: "block"}} to={`/blog/${blog._id}`}>
                            <Button>{blog.blogTitle}</Button>
                        </Link>
                    )
                })
                :""
            }
                </>
                :
                <Loading />
            }
        </>
    )
}

export default BlogPage;