import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NoImage from '../../assets/photo1662944723.jpeg';

import Share from './Share';

const BlogCard = ({ id, title, img, text }) => {
    const navigate = useNavigate();
    const baseUrl = `${window.location.protocol}//${window.location.host}`;
    const articlePath = `/article/${id}`;
    const fullArticleUrl = `${baseUrl}${articlePath}`;

    function truncateString(text, length = 200) {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        } else {
            return text;
        }
    }

    return (
        <>
            <BlogCardDiv>
                <ImageDiv
                    $img={img}
                    onClick={() => {
                        navigate(articlePath);
                    }}
                />
                <RigthDiv>
                    <ContentDiv
                        onClick={() => {
                            navigate(articlePath);
                        }}
                    >
                        <h2>{title || 'Title'}</h2>
                        <p>
                            {truncateString(
                                decodeURIComponent(text) ||
                                    `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Reprehenderit itaque eum reiciendis, fugit voluptas quaerat
                            facere officiis possimus sed sunt aliquid tenetur soluta
                            iste inventore? Adipisci expedita repellat ratione quod.`
                            )}
                        </p>
                    </ContentDiv>
                    <Share url={fullArticleUrl} title={title} />
                </RigthDiv>
            </BlogCardDiv>
        </>
    );
};

export default BlogCard;

const RigthDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    @media (max-width: 768px) {
        width: 95%;
    }
`;

const ImageDiv = styled.div`
    background-image: url(${(props) => props.$img ?? NoImage});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 50%;
    border-radius: 10px 0px 0px 10px;
    @media (max-width: 768px) {
        border-radius: 10px 10px 0px 0px;
        width: 100%;
    }
`;

const ContentDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 5px;
    flex-direction: column;
    max-height: 75%;
    width: 95%;
    @media (max-width: 768px) {
        align-items: center;
        width: 90%;
    }
`;

const BlogCardDiv = styled.div`
    height: 33vh;
    border: 2px solid var(--border-color);
    background-color: var(--background-color);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 70vw;
    border-radius: 10px;
    user-select: none;
    cursor: pointer;

    @media (max-width: 768px) {
        max-width: 95vw;
        flex-direction: column;
    }
`;
