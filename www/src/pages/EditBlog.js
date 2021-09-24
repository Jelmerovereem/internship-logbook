import { useEffect, useState } from "react";
import { get } from "../modules/serverFetches";
import EditBlogComp from "../components/EditBlogComp/EditBlogComp";
import { Link } from "react-router-dom";

const getBlog = async (id) => {
    const response = await get({ url: `/blogPost/${id}` });
    return response;
};

const EditBlog = (props) => {
    const [blogData, setBlogData] = useState({
        blogTitle: "",
        blogContent: "",
        publish: true,
        viewersCount: 0,
        headerImage: "",
      });
    const {
        match: {
          params: { id },
        },
      } = props;

      useEffect(() => {
        getBlog(id).then(res => setBlogData(res.blogData))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div>
            <Link to="/admin">Admin</Link>
            <p>Blog id: {id}</p>
            <EditBlogComp blogData={blogData} />
        </div>
    )
}

export default EditBlog;