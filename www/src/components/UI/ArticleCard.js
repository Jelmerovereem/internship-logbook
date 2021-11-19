import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkCard = styled(Link)`
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextContainer = styled.div`
    transform: translateY(0);
    transition: transform 0.5s;
`

const ArticleCard = styled.div`
    width: 300px;
    height: 500px;
    background: linear-gradient(180deg, rgba(90,133,255,0.6) 0%, rgba(153,179,255,0.6) 100%), url(${props => props.headerImage});
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    margin: 0 50px;
    border-radius: 10px;
    padding: 30px;
    transition: transform 2s;
    transform: scale(1);
    text-align: center;

    
    &:hover {
        ${TextContainer} {
            transform: translateY(-15px);
        }
    }
`

const CardTitle = styled.p`
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
`

const ArticleCardEl = (props) => {
    const {href, blogData} = props;
    const { headerImage } = blogData;


    return (
        <ArticleCard headerImage={headerImage}>
            <LinkCard to={href}>
                <TextContainer>
                    <CardTitle>{blogData.blogTitle}</CardTitle>
                    <span>{blogData.viewersCount}</span>
                </TextContainer>
            </LinkCard>
        </ArticleCard>
    )
}

export default ArticleCardEl;