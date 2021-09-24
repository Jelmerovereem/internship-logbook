import { Button, Input, Quill } from "../UI";
import { put } from "../../modules/serverFetches";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const EditBlogComp = (props) => {
    const { blogData } = props;
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleInputChanges = (fieldId, value) => {
        blogData[fieldId] = value;
    }

    const saveBlog = async () => {
        setIsSaving(true);
        const res = await put({url: `/blog/${blogData._id}`, body: {blogData}});
        if (res) {
            setIsSaving(false)
            setSaved(true)
            setTimeout(() => {
                setSaved(false)
            }, 3000)
        }
    }

    return (
        <div>
            <Input label="Blog title" id="blogTitle" onChange={handleInputChanges} value={blogData['blogTitle']} />
            <Input label="Header image" id="headerImage" onChange={handleInputChanges} value={blogData['headerImage']} type="file" accept="image/*" />
            {blogData.headerImage ? <img src={blogData.headerImage} width="50" height="50" alt="header" /> : <span>Heeft nog geen header foto</span>}
            <Quill
                    id="blogContent"
                    onChange={handleInputChanges}
                    value={blogData['blogContent']}
                    placeholder="Blog content..."
                />
                <Button onClick={saveBlog} loading={isSaving} >
                    {saved ? <AiOutlineCheck /> : "Save"}
                </Button>
        </div>
    )
}

export default EditBlogComp;