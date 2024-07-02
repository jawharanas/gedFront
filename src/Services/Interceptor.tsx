import axios from 'axios';


// Function to create Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Base URL of your Spring backend
});

// Add interceptor to add Bearer token to each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Assuming token is stored in localStorage
    if (token) {
      config.headers.Authorization ='Bearer ${token}';
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
      const response = await axiosInstance.get('/api/v1'); // Replace '/endpoint' with your actual API endpoint
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default axiosInstance;