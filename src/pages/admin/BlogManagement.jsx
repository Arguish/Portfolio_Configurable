import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    createArticle,
    fetchArticles,
    updateArticle,
    deleteArticle,
} from '../../services/blogService';

const BlogManagement = () => {
    useEffect(() => {
        const loadArticles = async () => {
            try {
                const articles = await fetchArticles();
                setEntries(articles);
            } catch (error) {
                console.error('Error al cargar artículos:', error);
            }
        };

        loadArticles();
    }, []);

    const [entries, setEntries] = useState([]);
    const [currentEntry, setCurrentEntry] = useState({
        title: '',
        text: '',
        img: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentEntry({ ...currentEntry, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCurrentEntry({
            ...currentEntry,
            text: encodeURIComponent(currentEntry.text),
        });
        try {
            if (currentEntry._id) {
                await updateArticle(currentEntry._id, currentEntry);
            } else {
                await createArticle(currentEntry);
            }

            const articles = await fetchArticles();
            setEntries(articles);
            setCurrentEntry({ title: '', text: '', img: '' });
        } catch (error) {
            console.error('Error al guardar el artículo:', error);
        }
    };

    const handleEdit = (article) => {
        article.text = decodeURIComponent(article.text);
        setCurrentEntry(article);
        window.scroll(0, 0);
    };

    const handleDelete = async (id) => {
        try {
            await deleteArticle(id);
            const updatedEntries = await fetchArticles();
            setEntries(updatedEntries);
        } catch (error) {
            console.error('Error al eliminar el artículo:', error);
        }
    };

    return (
        <BlogDiv>
            <h2>Administrar Entradas del Blog</h2>
            <FormDiv>
                <form onSubmit={handleSubmit}>
                    <FormDiv>
                        <input
                            name="title"
                            value={currentEntry.title}
                            onChange={handleInputChange}
                            placeholder="Título"
                            required
                        />
                        <input
                            name="img"
                            value={currentEntry.img}
                            onChange={handleInputChange}
                            placeholder="URL de la Imagen"
                        />
                        <CustomText
                            name="text"
                            value={currentEntry.text}
                            onChange={handleInputChange}
                            placeholder="Contenido"
                            required
                        />
                        <button type="submit">Guardar Entrada</button>
                    </FormDiv>
                </form>
            </FormDiv>
            <h3>Entradas Existentes</h3>
            <ul>
                {entries.map((entry) => (
                    <li key={entry._id}>
                        {entry.title} -
                        <button onClick={() => handleEdit(entry)}>
                            Editar
                        </button>{' '}
                        -
                        <button onClick={() => handleDelete(entry._id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </BlogDiv>
    );
};

export default BlogManagement;

const CustomText = styled.textarea`
    width: 90vw;
    min-height: 30vh;
`;

const BlogDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 90vw;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    align-self: center;
`;
