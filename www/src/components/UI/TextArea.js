const textAreaStyle = {
    display: "block",
    padding: "5px 0 5px 3px",
    margin: "5px auto 0"
}

const TextArea = (props) => {
    const {label, id, onChange, value} = props;
    const handleChange = event => {
        const title = event.target.value;
        onChange(id, title);
    }

    return (
        <>
        {label &&
            <label htmlFor={id ? id : ""}>{label}</label>
        }
        <textarea
            id={id}
            style={textAreaStyle}
            onChange={handleChange}
            value={value}
        >

        </textarea>
        </>
    )
}

export default TextArea;