import axios from 'axios';
import { getAuthToken } from './token.utils';

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: 150000000,
    headers: {
        'Content-Type': 'application/json',
    },
});


const token = getAuthToken();
Axios.defaults.headers.common['Authorization'] = `Bearer ${token ? token : ''}`;


export class HttpClient {
    static async get<T>(url: string, params?: unknown) {
        const response = await Axios.get<T>(url, { params });
        return response.data;
    }
    static async post<T>(url: string, data: unknown, options?: any) {
        const response = await Axios.post<T>(url, data, options);
        return response.data;
    }
}