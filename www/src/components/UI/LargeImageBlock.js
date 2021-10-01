import styled from "styled-components";
import largeImage from "../../assets/images/largeImage.jpg";

const LargeImageBlock = styled.div`
    width: 100%;
    height: 700px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const LargeImageBlockEl = () => {
    return (
        <LargeImageBlock>
            <img src={largeImage} alt="coding" />
        </LargeImageBlock>
    )
}

export default LargeImageBlockEl;