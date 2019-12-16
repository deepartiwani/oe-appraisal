import axios from 'axios';

export function getUserAuthenticated(body) {
    
    const authenticateUser = `http://localhost:5000/api/v1/login`;
  
    return axios.post(authenticateUser, body);
  }