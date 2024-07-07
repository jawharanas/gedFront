import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth/';
// Function to create Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to add Bearer token to each request
axiosInstance.interceptors.request.use(
  (config) => {
    const url = config.url ?? '';
    const token = localStorage.getItem('accessToken'); // Assuming token is stored in localStorage
    if (token && !url.includes('/signup') && !url.includes('/signin')) {
      config.headers.Authorization = `Bearer ${token}`;
    
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example component making use of Axios instance
function ExampleComponent() {
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/auth'); // Replace '/endpoint' with your actual API endpoint
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // Redirect to login page or refresh token
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default axiosInstance;