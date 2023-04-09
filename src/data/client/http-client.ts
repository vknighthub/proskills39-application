import axios, { AxiosRequestHeaders } from 'axios';
import { AUTH_TOKEN_KEY, getAuthToken, removeAuthToken } from './token.utils';
import Router from 'next/router';
import Cookies from 'js-cookie';

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: 150000000,
    headers: {
        'Content-Type': 'application/json',
    },
});

Axios.interceptors.request.use(
    (config) => {
        const cookies = Cookies.get(AUTH_TOKEN_KEY);
        let token = '';
        if (cookies) {
            token = cookies
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            } as unknown as AxiosRequestHeaders;

        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


Axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403)
        ) {
        }
        return Promise.reject(error);
    }
);

export class HttpClient {
    static async get<T>(url: string, params?: unknown) {
        const response = await Axios.get<T>(url, { params });
        return response.data;
    }
    static async post<T>(url: string, data: unknown, options?: any) {
        const response = await Axios.post<T>(url, data, options);
        return response.data;
    }
    static async put<T>(url: string, data: unknown) {
        const response = await Axios.put<T>(url, data);
        return response.data;
    }
}