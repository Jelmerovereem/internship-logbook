import { useState } from "react";
import {TextArea, Input, Checkbox} from "../UI";
import Button from "../Button/Button";
import {post} from "../../modules/serverFetches";

const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1
}

const modalStyle = {
    width: "500px",
    minHeight: "300px",
    height: "auto",
    margin: "200px auto 0",
    background: "white",
    borderRadius: "25px",
    padding: "20px 0",
}

const PostModal = (props) => {
    const {onClose, onAdded} = props;
    const [blogData, updateBlogData] = useState({
        blogTitle: "",
        blogContent: "",
        publish: true
    });
    const handleInputChanges = (fieldId, value) => {
        //console.log(fieldId, value)
        updateBlogData({...blogData, [fieldId]: value})
    }

    const postBlog = () => {
        console.log(blogData)
        post({url: "/blog", body: blogData}).then((res) => {
            console.log(res)
            if (res.status === 200) {
                alert("Gelukt!")
                blogData["_id"] = res.blogId;
                onAdded(blogData)
                onClose()
            } else {
                alert("Niet gelukt")
            }
        })
    }

    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={modalStyle} onClick={(event) => event.stopPropagation()}>
                <span onClick={onClose} style={{cursor: "pointer"}} >Close</span>
                <h3>Create your new post</h3>
                <Input label="Blog title" id="blogTitle" onChange={handleInputChanges} value={blogData['blogTitle']} />
                <TextArea label="Blog content" id="blogContent" onChange={handleInputChanges} value={blogData['blogContent']} />
                <Checkbox label="Publish" id="publish" checked={true} onChange={handleInputChanges} value={blogData['publish']}  />
                <Button onClick={postBlog} >Save</Button>
            </div>
        </div>
    )
}

export default PostModal;