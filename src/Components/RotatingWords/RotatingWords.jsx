import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Componente estilizado para el texto y el cursor de escritura
const RotatingText = styled.span`
    font-weight: bold; // Ajusta según tus preferencias de estilo
`;

const Cursor = styled.span`
    font-weight: bold;
    animation: blink 1s infinite;
    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
`;

const words = [
    'learn',
    'code',
    'investigate',
    'test',
    'deploy',
    'design',
    'optimize',
    'collaborate',
    'build',
    'innovate',
];

const RotatingWords = () => {
    const [currentWord, setCurrentWord] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    useEffect(() => {
        const updateWord = setInterval(() => {
            const word = words[currentIndex];
            if (currentLetterIndex < word.length) {
                setCurrentWord(
                    (currentWord) => currentWord + word[currentLetterIndex]
                );
                setCurrentLetterIndex(
                    (currentLetterIndex) => currentLetterIndex + 1
                );
            } else {
                clearInterval(updateWord);
                setTimeout(() => {
                    setCurrentWord('');
                    setCurrentLetterIndex(0);
                    setCurrentIndex(
                        (currentIndex) => (currentIndex + 1) % words.length
                    );
                }, 2000); // Espera 2 segundos antes de comenzar a escribir la siguiente palabra
            }
        }, 150); // Escribe una letra cada 150ms

        return () => clearInterval(updateWord);
    }, [currentWord, currentIndex, currentLetterIndex]);

    return (
        <RotatingText>
            {currentWord}
            <Cursor>|</Cursor>
        </RotatingText>
    );
};

export default RotatingWords;
