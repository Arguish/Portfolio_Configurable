import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
    createTechnology,
    fetchTechnologies,
    updateTechnology,
    deleteTechnology,
} from '../../services/techService.js';

const TechManagement = () => {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                const data = await fetchTechnologies();
                setTechnologies(data);
            } catch (error) {
                console.error('Error al cargar tecnologías:', error);
            }
        };

        loadTechnologies();
    }, []);

    return (
        <>
            <GridContainer>
                {technologies.map((tech) => (
                    <TechnologyItem key={tech._id} tech={tech} />
                ))}

                <AddTechForm>
                    <NewTechnologyForm />
                </AddTechForm>
            </GridContainer>
        </>
    );
};

export default TechManagement;

const TechImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`;

const TechnologyItem = ({ tech }) => {
    const [name, setName] = useState(tech.name);
    const [domain, setDomain] = useState(tech.domain);

    const handleUpdate = async () => {
        try {
            await updateTechnology(tech._id, { name, domain });
            alert('Tecnología actualizada con éxito');
        } catch (error) {
            console.error('Error al actualizar tecnología:', error);
            alert('Error al actualizar tecnología');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de querer borrar esta tecnología?')) {
            try {
                await deleteTechnology(tech._id);
                alert('Tecnología borrada con éxito');
            } catch (error) {
                console.error('Error al borrar tecnología:', error);
                alert('Error al borrar tecnología');
            }
        }
    };

    function buildImageUrl(domainOrUrl) {
        const clearbitBaseUrl = 'https://logo.clearbit.com/';

        if (domainOrUrl.startsWith('http')) {
            return domainOrUrl;
        } else {
            return `${clearbitBaseUrl}${domainOrUrl}`;
        }
    }
    const imageUrl = buildImageUrl(domain);

    return (
        <TechItemContainer>
            <TechImage src={imageUrl} alt={name} />
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre de la tecnología"
            />
            <Input
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Dominio"
            />
            <div>
                <Button onClick={handleUpdate}>Actualizar</Button>
                <Button onClick={handleDelete}>Borrar</Button>
            </div>
        </TechItemContainer>
    );
};

const TechItemContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    &:first-of-type {
        background-color: #4caf50;
        color: white;
    }
    &:last-of-type {
        background-color: #f44336;
        color: white;
    }
`;

const NewTechnologyForm = () => {
    const [name, setName] = useState('');
    const [domain, setDomain] = useState('');

    const addTechnology = async () => {
        try {
            await createTechnology({ name, domain });
            alert('Tecnología añadida con éxito');
            setName('');
            setDomain('');
        } catch (error) {
            console.error('Error al añadir tecnología:', error);
            alert('Error al añadir tecnología');
        }
    };

    return (
        <div>
            <input
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Dominio"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
            />
            <button onClick={addTechnology}>Añadir</button>
        </div>
    );
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-content: center;
    padding: 20px;
`;

const TechItem = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const AddTechForm = styled(TechItem)`
    justify-content: center;
    min-height: 220px;
`;
