import axiosInstance from '../utils/axiosConfig';

export const createTechnology = async (data) => {
    try {
        const response = await axiosInstance.post('/bio/add', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchTechnologies = async () => {
    try {
        const response = await axiosInstance.get('/bio/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateTechnology = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/bio/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteTechnology = async (id) => {
    try {
        const response = await axiosInstance.delete(`/bio/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
