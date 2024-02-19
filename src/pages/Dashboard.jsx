import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
    createTechnology,
    fetchTechnologies,
    updateTechnology,
    deleteTechnology,
} from '../services/techService.js';

const Dashboard = () => {
    const [technologies, setTechnologies] = useState([]);

    // Cargar tecnologías al montar el componente
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
        <GridContainer>
            {technologies.map((tech) => (
                <TechnologyItem key={tech._id} tech={tech} />
            ))}

            <AddTechForm>
                <NewTechnologyForm />
            </AddTechForm>
        </GridContainer>
    );
};

export default Dashboard;

const TechImage = styled.img`
    width: 80px; // Ajusta el tamaño según tus necesidades
    height: 80px; // Asegúrate de que width y height sean iguales para una forma circular perfecta
    border-radius: 50%; // Esto hace que la imagen sea redonda
    object-fit: cover; // Asegura que la imagen cubra el espacio sin distorsionarse
`;

const TechnologyItem = ({ tech }) => {
    const [name, setName] = useState(tech.name);
    const [domain, setDomain] = useState(tech.domain);

    // Función para actualizar la tecnología
    const handleUpdate = async () => {
        try {
            // Asume que updateTechnology espera un objeto con las propiedades actualizadas
            // y la id de la tecnología como argumentos
            await updateTechnology(tech._id, { name, domain });
            alert('Tecnología actualizada con éxito');
        } catch (error) {
            console.error('Error al actualizar tecnología:', error);
            alert('Error al actualizar tecnología');
        }
    };

    // Función para borrar la tecnología
    const handleDelete = async () => {
        // Confirmación antes de borrar
        if (window.confirm('¿Estás seguro de querer borrar esta tecnología?')) {
            try {
                await deleteTechnology(tech._id);
                alert('Tecnología borrada con éxito');
                // Aquí podrías querer recargar la lista de tecnologías o manejar la UI de alguna manera
            } catch (error) {
                console.error('Error al borrar tecnología:', error);
                alert('Error al borrar tecnología');
            }
        }
    };

    // Función auxiliar para construir la URL de la imagen
    function buildImageUrl(domainOrUrl) {
        const clearbitBaseUrl = 'https://logo.clearbit.com/';

        // Comprueba si el string recibido ya es una URL completa
        if (domainOrUrl.startsWith('http')) {
            return domainOrUrl; // Retorna la URL completa si ya lo es
        } else {
            return `${clearbitBaseUrl}${domainOrUrl}`; // Construye la URL usando Clearbit si solo es un dominio
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
    margin: 5px 0; // Añade un pequeño margen entre los inputs
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
        background-color: #4caf50; // Color para el botón de actualizar
        color: white;
    }
    &:last-of-type {
        background-color: #f44336; // Color para el botón de borrar
        color: white;
    }
`;

const NewTechnologyForm = () => {
    const [name, setName] = useState('');
    const [domain, setDomain] = useState('');

    // Asegúrate de definir correctamente la función addTechnology
    const addTechnology = async () => {
        try {
            // Aquí asumo que createTechnology es una función importada de techService.js
            // y espera un objeto con las propiedades name y domain
            await createTechnology({ name, domain });
            alert('Tecnología añadida con éxito');
            // Opcional: Resetear el formulario o actualizar el estado global/UI según sea necesario
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
            {/* Asegúrate de llamar a addTechnology cuando se haga clic en el botón */}
            <button onClick={addTechnology}>Añadir</button>
        </div>
    );
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(200px, 1fr)
    ); // Esto crea columnas que se ajustan al tamaño del contenido, con un mínimo de 200px y un máximo que se ajusta al espacio disponible
    gap: 20px; // Espacio entre los elementos de la cuadrícula
    justify-content: center; // Centra los elementos en el contenedor
    padding: 20px; // Espaciado alrededor del contenedor de la cuadrícula
`;

// Componente para cada elemento de tecnología
const TechItem = styled.div`
    border: 1px solid #ccc; // Un ligero borde para definir cada elemento
    border-radius: 10px; // Bordes redondeados
    padding: 10px; // Espaciado dentro de cada elemento
    display: flex;
    flex-direction: column;
    align-items: center; // Centra los elementos verticalmente
    gap: 10px; // Espacio entre los elementos internos
`;

// Estilos para el formulario de añadir nueva tecnología
const AddTechForm = styled(TechItem)`
    justify-content: center; // Asegura que los elementos internos estén centrados
    min-height: 220px; // Altura mínima para mantener la consistencia antes de añadir contenido
`;
