import axios from 'axios';
import config from '../config/config';

export const login = async (body) => {
    
    const { loginKey, password } = body;
    
    const response = await axios.post(
        `${config.endpoint}/users/login`,
        {
            loginKey,
            password
        }
    );

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}

export const register = async (body) => {
    
    const { username, email, password } = body;
    
    const response = await axios.post(
        `${config.endpoint}/users/register`,
        {
            username,
            email,
            password
        }
    );

    if (response.status !== 201) {
        throw new Error(response.data.message);
    }

    return response.data;
}