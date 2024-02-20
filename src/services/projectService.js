import axiosInstance from '../utils/axiosConfig';

// Crear una nueva tecnología
export const createProject = async (data) => {
    try {
        const response = await axiosInstance.post('/exp/add', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Obtener todas las tecnologías
export const fetchProjects = async () => {
    try {
        const response = await axiosInstance.get('/exp/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Actualizar una tecnología existente
export const updateProject = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/exp/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Borrar una tecnología
export const deleteProject = async (id) => {
    try {
        const response = await axiosInstance.delete(`/exp/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
