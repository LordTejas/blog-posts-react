import axios from 'axios';
import config from '../config/config';

const fetchUsers = async () => {
    
    const response = await axios.get(
        `${config.endpoint}/users`,
    );

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}

export default {
    fetchUsers,
}