
import axiosInstance from "./Interceptor.tsx"
export const listEmployees = ()=> {
    const REST_API_BASE_URL= 'http://localhost:8080/api/v1/employees/All';
    return   axiosInstance.get(REST_API_BASE_URL);

};
