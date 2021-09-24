import { useState } from "react";
import { Colors } from "./Colors";
import { Loading } from ".";

export default function Button(props) {
    const [isHovered, setIsHovered] = useState(false);
    const {onClick, children, loading} = props;

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

    isHovered ? buttonStyle.borderColor = Colors.primaryBlue : buttonStyle.borderColor = "";

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            {loading ? <Loading /> : children}
        </button>
    )
}