import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import "../../styles/QuillStyles.css";
//import 'react-quill/dist/quill.bubble.css';
//import 'react-quill/dist/quill.core.css';
import uploadFile from "../../modules/uploadFile";
import { useState } from "react";
import { Colors } from "./Colors.js";

let quillObj = {};

const imageHandler = (value) => {
    // https://www.c-sharpcorner.com/article/how-to-add-image-upload-control-in-react-quill-rich-text-editor/
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
        const file = input.files[0];

        const res = await uploadFile(file);
        
        const range = quillObj.getEditorSelection();
        quillObj.getEditor().insertEmbed(range.index, "image", res.secure_url);
    }
}

const modules = {
    toolbar: {
        container: [
            [{ "header": [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{"list": "ordered"}, {"list": "bullet"}, {"indent": "-1"}, {"indent": "+1"}],
            ["link", "image"],
            ["clean"]
        ],
        handlers: {
            image: imageHandler
        }
    },
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const Quill = (props) => {
    const {onChange, id, value, style, placeholder} = props;
    const [quillFocused, setQuillFocused] = useState(false);

    const handleChange = (value) => {
        onChange(id, value)
    }

    const quillStyle = {
        transition: "border 0.5s",
        height: "300px",
        margin: "20px 0 100px"
    }

    const quillContainer = document.querySelector(".ql-container");
    const quillToolbar = document.querySelector(".ql-toolbar");
    //quillFocused ? quillStyle.border = "1px solid blue" : quillStyle.border = "5px solid lightgrey"
    if (quillContainer && quillFocused && quillToolbar) {
        quillContainer.style.borderColor = Colors.primaryBlue;
        quillToolbar.style.borderBottomColor = Colors.primaryBlue;
    } else if (quillContainer && quillToolbar) {
        quillContainer.style.borderColor = "lightgrey";
        quillToolbar.style.borderBottomColor = "lightgrey";
    }

    return (
        <ReactQuill
            ref={(el) => {
                quillObj = el;
            }}
            theme="snow"
            modules={modules}
            formats={formats}
            style={{...style, ...quillStyle}}
            onFocus={() => setQuillFocused(true)}
            onBlur={() => setQuillFocused(false)}
            value={value}
            placeholder={placeholder}
            onChange={handleChange} />
    )
}

export default Quill;