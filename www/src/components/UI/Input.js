import { useState } from "react";

const inputStyle = {
    display: "block",
    padding: "5px 0 5px 3px",
    margin: "5px auto 0"
}

const Input = (props) => {
    const {label, id, onChange} = props;
    const [inputValue, setInputValue] = useState('');
    const handleChange = event => {
        const title = event.target.value;
        setInputValue(title)
        onChange(id, title);
    }

    return (
        <>
            {label &&
                <label htmlFor={id ? id : ""} >{label}</label>
            }
            <input
                id={id}
                style={inputStyle}
                onChange={handleChange}
                value={inputValue}
            />
        </>
    )
}

export default Input;