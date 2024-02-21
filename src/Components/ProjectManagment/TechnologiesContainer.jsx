import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TechnologiesContainer = ({ proyect, updateProjectCallback }) => {
    const [techData, setTechData] = useState(
        proyect ? proyect.technologies : []
    );
    const [newTech, setNewTech] = useState('');
    const [newColor, setNewColor] = useState('grey');

    console.log(proyect);
    console.log(techData);
    useEffect(() => {
        console.log(techData);
        updateProjectCallback({
            ...proyect,
            technologies: techData,
        });
    }, [techData]);

    const handleDelete = (i) => {
        const newArray = [...techData];
        newArray.splice(i, 1);
        setTechData(newArray);
    };
    return (
        <TechnologiesDiv>
            <div>
                {techData.map((techItem, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={() => {
                                handleDelete(index);
                            }}
                        >
                            {techItem.name} 🗑️
                        </Button>
                    );
                })}
            </div>
            <div>
                <input
                    onChange={(e) => {
                        setNewTech(e.target.value);
                    }}
                    type="text"
                    name=""
                    id=""
                />
                <input
                    onChange={(e) => {
                        setNewColor(e.target.value);
                    }}
                    type="color"
                    name=""
                    id=""
                />
                <Button
                    onClick={() => {
                        setTechData([
                            ...techData,
                            { name: newTech, color: newColor },
                        ]);
                    }}
                >
                    OK
                </Button>
            </div>
        </TechnologiesDiv>
    );
};

export default TechnologiesContainer;

const TechnologiesDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: var(--text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: var(--secondary-color);
    }
`;
