import { useEffect, useRef } from "react";
import styled from "styled-components";

const AbsoluteTitle = styled.span`
    font-size: 72px;
    color: black;
    position: absolute;
    font-weight: bolder;
    color: white;
    top: 52%;
    left: 25%;
    transform: translateX(-25%);
    z-index: 2;
    text-transform: uppercase;
    transition: all 1s;
    opacity: 0;

    &.fadeIn {
        opacity: 1;
        top: 654px;
        //top: 56.5%;
        //transform: translate(-25%, -100px);
    }
`

const AbsoluteTitleEl = (props) => {
    const { children } = props;

    const titleRef = useRef(null);

    useEffect(() => {
        // window.addEventListener("scroll", () => {
        //     const pos = titleRef.current.getBoundingClientRect();
        //     //console.log(pos.top)
        //     if (pos.top <= 1300) {
        //         titleRef.current.classList.add("fadeIn");
        //     }
        // })
    })

    return (
        <AbsoluteTitle ref={titleRef} className="fadeIn">
            {children}
        </AbsoluteTitle>
    )
}

export default AbsoluteTitleEl;