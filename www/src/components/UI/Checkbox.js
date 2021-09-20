import { useState } from "react";

const checkboxStyle = {
    display: "block",
    padding: "5px 0 5px 3px",
    margin: "5px auto 0"
}

const Checkbox = (props) => {
    const {label, id, checked, onChange} = props;
    const [isChecked, setIsChecked] = useState(checked);

    const toggleCheckbox = () => {
        const newValue = !isChecked;
        setIsChecked(newValue)
        onChange(id, newValue)
    }

    return (
        <>
            {label &&
                <label htmlFor={id ? id : ""} >{label}</label>
            }
            <input
                type="checkbox"
                id={id}
                checked={isChecked || false}
                onChange={toggleCheckbox}
                style={checkboxStyle}
            />
        </>
    )
}

export default Checkbox;