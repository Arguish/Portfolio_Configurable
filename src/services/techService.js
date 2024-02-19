import axiosInstance from '../utils/axiosConfig';

// Crear una nueva tecnología
export const createTechnology = async (data) => {
    try {
        const response = await axiosInstance.post('/bio/add', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Obtener todas las tecnologías
export const fetchTechnologies = async () => {
    try {
        const response = await axiosInstance.get('/bio/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Actualizar una tecnología existente
export const updateTechnology = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/bio/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Borrar una tecnología
export const deleteTechnology = async (id) => {
    try {
        const response = await axiosInstance.delete(`/bio/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
