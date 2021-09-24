import { useState } from "react";

const checkboxStyle = {
    padding: "5px 0 5px 3px",
    marginLeft: "5px"
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
        <div style={{marginBottom: "10px"}}>
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
        </div>
    )
}

export default Checkbox;