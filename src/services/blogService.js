import axiosInstance from '../utils/axiosConfig';

export const createArticle = async (data) => {
    try {
        const response = await axiosInstance.post('/blog/create', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchArticles = async () => {
    try {
        const response = await axiosInstance.get('/blog/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const fetchOneArticles = async (id) => {
    try {
        const response = await axiosInstance.get(`/blog/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateArticle = async (id, data) => {
    try {
        const response = await axiosInstance.put(`/blog/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteArticle = async (id) => {
    try {
        const response = await axiosInstance.delete(`/blog/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
