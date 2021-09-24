import { useEffect, useState } from "react";
import uploadFile from "../../modules/uploadFile";

const inputStyle = {
    display: "block",
    padding: "5px 0 5px 3px",
    margin: "5px auto 0"
}

const Input = (props) => {
    const {label, id, onChange, type="text", accept, value} = props;
    const [inputValue, setInputValue] = useState(value);
    const [fileValue, setFileValue] = useState(value);
    const handleChangeDefault = event => {
        const value = event.target.value;
        setInputValue(value);
        onChange(id, value);
    }

    const handleChangeFile = async event => {
        const file = event.target.files[0];
        setFileValue(event.target.value);
        const uploadedFile = await uploadFile(file);
        console.log('uploaded file', uploadedFile)
        onChange(id, uploadedFile.secure_url);
    }

    useEffect(() => {
        setInputValue(value)
    }, [value])

    return (
        <>
            {label &&
                <label htmlFor={id ? id : ""} >{label}</label>
            }
            <input
                id={id}
                style={inputStyle}
                onChange={type === "file" ? handleChangeFile  : handleChangeDefault}
                value={type === "file" ? fileValue : inputValue}
                type={type}
                accept={accept}
            />
        </>
    )
}

export default Input;