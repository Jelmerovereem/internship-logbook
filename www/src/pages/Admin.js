import { useState, useEffect } from "react";
import H1 from "../components/Headings/H1";
import { Link } from "react-router-dom";
import { Button } from "../components/UI";
import PostModal from "../components/PostModal/PostModal";
import { get, deleteReq } from "../modules/serverFetches";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const BlogsData = async () => {
  const response = await get({ url: "/blogs" });
  return response;
};

const Admin = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    BlogsData().then((res) => {
      setBlogs(res.blogs);
    });
  }, []);

  const addedPost = (blogData) => {
    setBlogs([...blogs, blogData]);
  };

  const removePost = async (postId) => {
    const response = await deleteReq({ url: "/blog", body: { postId } });
    setBlogs(blogs.filter((b) => b._id !== postId));
    return response;
  };

  return (
    <div>
      <Link to="/">Back to home</Link>
      <H1>Welcome to the admin dashboard</H1>
      {showPostModal && (
        <PostModal
          onClose={() => setShowPostModal(false)}
          onAdded={addedPost}
        />
      )}
      {blogs.length > 0 ? (
        <>
          <Button onClick={() => setShowPostModal(true)}>Add post</Button>
          {blogs.map((blog) => {
            return (
              <div key={blog._id}>
                <h2>{blog.blogTitle}</h2>
                <Link to={`/admin/${blog._id}/edit`}>
                  <AiOutlineEdit />
                </Link>
                <AiOutlineDelete
                  onClick={() => removePost(blog._id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            );
          })}
        </>
      ) : (
        <>
          <p>No posts yet, add one</p>
          <Button onClick={() => setShowPostModal(true)}>Add post</Button>
        </>
      )}
    </div>
  );
};
export default Admin;
