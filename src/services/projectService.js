import axiosInstance from '../utils/axiosConfig';

export const createProject = async (data) => {
    try {
        const response = await axiosInstance.post('/exp/add', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchProjects = async () => {
    try {
        const response = await axiosInstance.get('/exp/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateProject = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/exp/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteProject = async (id) => {
    try {
        const response = await axiosInstance.delete(`/exp/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
