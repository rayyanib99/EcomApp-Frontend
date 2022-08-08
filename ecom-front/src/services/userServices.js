import axios from 'axios'

const USER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/users';

class userServices
{
    getAllUsers()
    {
        return axios.get(USER_BASE_REST_API_URL)
    }

    addUser(user)
    {
        return axios.post(USER_BASE_REST_API_URL, user)
    }

    getUser(userId)
    {
        return axios.get(USER_BASE_REST_API_URL + '/' + userId);
    }

    updateUser(userId, user)
    {
        return axios.put(USER_BASE_REST_API_URL + '/' + userId, user);
    }

    deleteUser(userId)
    {
        return axios.delete(USER_BASE_REST_API_URL + '/' + userId);
    }
}

export default new userServices();