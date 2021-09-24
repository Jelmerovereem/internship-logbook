import { useState } from "react";
import { Input, Checkbox, Button, Quill } from "../UI";
import { post } from "../../modules/serverFetches";
import { AiOutlineClose } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
};

const modalStyle = {
  width: "500px",
  minHeight: "300px",
  height: "auto",
  margin: "50px auto 0",
  background: "white",
  borderRadius: "25px",
  padding: "20px 0",
};

const PostModal = (props) => {
  const { onClose, onAdded } = props;
  const [blogData, updateBlogData] = useState({
    blogTitle: "",
    blogContent: "",
    publish: true,
    headerImage: "",
  });

  const handleInputChanges = (fieldId, value) => {
    updateBlogData({ ...blogData, [fieldId]: value });
  };

  const postBlog = () => {
    blogData.date = new Date();
    post({ url: "/blog", body: blogData }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Gelukt!");
        blogData["_id"] = res.blogId;
        onAdded(blogData);
        onClose();
      } else {
        alert("Niet gelukt");
      }
    });
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <Fade>
        <div style={modalStyle} onClick={(event) => event.stopPropagation()}>
          <AiOutlineClose
            onClick={onClose}
            style={{
              cursor: "pointer",
              float: "right",
              marginRight: "20px",
            }}
          />
          <h3>Create your new post</h3>
          <Input
            label="Blog title"
            id="blogTitle"
            onChange={handleInputChanges}
            value={blogData["blogTitle"]}
          />
          <Input
            label="Header image"
            id="headerImage"
            onChange={handleInputChanges}
            value={blogData["headerImage"]}
            type="file"
            accept="image/*"
          />
          {blogData.headerImage ? (
            <img
              src={blogData.headerImage}
              width="50"
              height="50"
              alt="header"
            />
          ) : (
            ""
          )}
          <Quill
            id="blogContent"
            onChange={handleInputChanges}
            value={blogData["blogContent"]}
            placeholder="Blog content..."
          />
          <Checkbox
            label="Publish"
            id="publish"
            checked={true}
            onChange={handleInputChanges}
            value={blogData["publish"]}
          />
          <Button onClick={postBlog}>Save</Button>
        </div>
      </Fade>
    </div>
  );
};

export default PostModal;
