import axios from 'axios';

export const reqResApi = axios.create({
    baseURL: 'https://dummyapi.io/data/v1'
});
