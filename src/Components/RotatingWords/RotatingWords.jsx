import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RotatingText = styled.span`
    font-weight: bold;
    display: inline-block;
    min-width: 150px;
    text-align: left;
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
    ' learn',
    ' code',
    ' investigate',
    ' test',
    ' deploy',
    ' design',
    ' optimize',
    ' collaborate',
    ' build',
    ' innovate',
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
                }, 2000);
            }
        }, 150);
        document.title = `While (true):${currentWord}`;
        return () => clearInterval(updateWord);
    }, [currentWord, currentIndex, currentLetterIndex]);

    return (
        <RotatingText>
            While (true):
            <br />
            {currentWord}
            <Cursor>|</Cursor>
        </RotatingText>
    );
};

export default RotatingWords;
