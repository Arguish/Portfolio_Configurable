import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { fetchOneArticles } from '../services/blogService';
import NoImage from '../assets/photo1662944723.jpeg';
import Share from '../Components/Blog/Share';

const ArticlePage = () => {
    const { id } = useParams(); // Obtiene el id desde la URL
    const [article, setArticle] = useState(null);
    const articleUrl = `${window.location.origin}/article/${id}`;
    const [decoded, setdecoded] = useState('');

    useEffect(() => {
        const loadArticle = async () => {
            try {
                const data = await fetchOneArticles(id);
                setArticle(data);
                setdecoded(decodeURIComponent(data.text));
            } catch (error) {
                console.error('Error al cargar el artículo:', error);
            }
        };

        loadArticle();
    }, [id]);

    if (!article) return <div>Cargando...</div>;

    return (
        <>
            <ArticleDiv>
                <Sticky>
                    <Share url={articleUrl} title={article.title} />
                </Sticky>
                <Title>{article.title}</Title>
                <ImageDiv $img={article.img} />
                <hr />
                <P>
                    <TextWithLineBreaks text={decoded} />
                </P>
            </ArticleDiv>
        </>
    );
};

export default ArticlePage;

const Sticky = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 80px;
    width: 98%;
    z-index: 1000;
`;

const Title = styled.h1`
    font-size: 45px;
`;
const P = styled.p`
    width: 80%;
    font-size: 20px;
`;

const ArticleDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const ImageDiv = styled.div`
    background-image: url(${(props) => props.$img ?? NoImage});
    background-size: cover;
    background-position: center;
    border: 1px solid red;
    height: 200px;
    width: 75%;
    border-radius: 50px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

function TextWithLineBreaks({ text }) {
    return (
        <div>
            {text.split('\n').map((line, index, array) =>
                index === array.length - 1 ? (
                    line
                ) : (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                )
            )}
        </div>
    );
}
