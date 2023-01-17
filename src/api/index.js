import axios from 'axios';

const baseURL = 'http://localhost:4800/';
 
export const validateUser = async (token) => {
    try {
        const response = await axios.get(`${baseURL}api/v1/users/login`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            
        })
        return response.data
        
    } catch (error) {
        
    }
} 