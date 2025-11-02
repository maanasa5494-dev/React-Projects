import axios from 'axios';
import NavigatorObject from './navigator.service';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

apiClient.interceptors.request.use((config) => {
    debugger;
    const token = localStorage.getItem('login');
    config.headers.Authorization = `Bearer ${token}`
    return config;
});

apiClient.interceptors.response.use((config) => {
    debugger;
    if (config.status === 200) {
        const navigate = NavigatorObject.getNavigate();
        navigate('/');
    }
    return config;
});

export default apiClient;