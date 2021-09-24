import { useState } from "react";
import { Colors } from "./Colors";

const Dropdown = (props) => {
    const {label, id, children, onChange} = props;
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const dropdownStyle = {
        padding: "5px 10px 5px 2px",
        border: "2px solid",
        borderRadius: "5px",
        outline: "none",
        borderColor: "lightgrey",
        transition: "border-color 0.3s",
        cursor: "pointer",
        marginTop: "10px"
    }

    isFocused ? dropdownStyle.borderColor = Colors.primaryBlue : isHovered ? dropdownStyle.borderColor = Colors.primaryBlue : dropdownStyle.borderColor = "lightgrey"

    return (
        <>
            {label &&
                <label htmlFor={id}>{label}</label>
            }
            <select
                id={id}
                name={id}
                onChange={onChange}
                style={dropdownStyle}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
            </select>
        </>
    )
}

export default Dropdown;