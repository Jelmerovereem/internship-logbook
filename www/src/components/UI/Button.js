import { useState } from "react";

export default function Button(props) {
    const [isHovered, setIsHovered] = useState(false);
    const {onClick, children} = props;

    const buttonStyle = {
        background: 'none',
        padding: '10px',
        border: '2px solid lightgrey',
        borderColor: 'lightgrey',
        borderRadius: '18px',
        fontWeight: 600,
        cursor: 'pointer',
    }

    function toggleHover() {
        setIsHovered(!isHovered);
    }

    isHovered ? buttonStyle.borderColor = "blue" : buttonStyle.borderColor = "";

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            {children}
        </button>
    )
}