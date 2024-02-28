import React, { useState, useEffect } from 'react';
import BlogCard from '../Components/Blog/BlogCard';
import styled from 'styled-components';
import { fetchArticles } from '../services/blogService';

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                const fetchedArticles = await fetchArticles();
                setArticles(fetchedArticles);
            } catch (error) {
                console.error('Error al cargar los artículos:', error);
            }
        };

        loadArticles();
    }, []);
    return (
        <BlogDiv>
            {articles.map((article) => (
                <BlogCard
                    key={article._id}
                    id={article._id}
                    title={article.title}
                    img={article.img}
                    text={article.text}
                />
            ))}
        </BlogDiv>
    );
};

export default Blog;

const BlogDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
    margin-top: 2vh;
`;
