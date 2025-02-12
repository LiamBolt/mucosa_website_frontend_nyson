import apiClient from './apiClient';

export const login = async (username, password) => {
  const response = await apiClient.post('/token/', { username, password });
  localStorage.setItem('accessToken', response.data.access);
  localStorage.setItem('refreshToken', response.data.refresh);
  return response.data;
};

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await apiClient.post('/token/refresh/', { refresh: refreshToken });
  localStorage.setItem('accessToken', response.data.access);
  return response.data;
};

export const fetchNews = async (params = {}) => {
  try {
    const response = await apiClient.get('/news/', { params });
    // Extract just the results array from the paginated response
    return response.data.results || [];
  } catch (error) {
    // Rethrow the error to be handled by the component
    throw error;
  }
};

export const fetchNewsDetail = async (id) => {
  const response = await apiClient.get(`/news/${id}/`);
  return response.data;
}; 