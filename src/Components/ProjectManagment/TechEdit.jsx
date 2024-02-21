import React, { useState } from 'react';
import styled from 'styled-components';

import Chip from '../ProjectCard/Chip';

const TechEdit = ({ edit, name, color }) => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && (
                <div>
                    {edit ? (
                        <Button
                            onClick={async () => {
                                setVisible(false);
                            }}
                        >
                            {name} ❌
                        </Button>
                    ) : (
                        <Chip text={name} color={color} />
                    )}
                </div>
            )}
        </>
    );
};

export default TechEdit;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
