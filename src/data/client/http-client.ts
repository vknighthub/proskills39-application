import { AES256Decrypt, AES256Encrypt, GenerateMessage } from '@/utils/Encrypt';
import axios, { AxiosRequestHeaders } from 'axios';
import Cookies from 'js-cookie';
import { AUTH_TOKEN_KEY, removeAuthToken } from './token.utils';

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
            token = JSON.parse(cookies)['token'];
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
            removeAuthToken()
            window.location.href="/login"
        }
        const errormsg = GenerateMessage(error.response)
        error.response.data = errormsg;
        return Promise.reject(error);
    }
);

export class HttpClient {
    static async get<T>(url: string, params?: unknown) {
        const response = await Axios.get<T>(url, { params });
        const ivkey = response.headers["proskills39"];
        return AES256Decrypt(response.data, ivkey);
    }
    static async post<T>(url: string, data: unknown, options?: any) {
        const requestData = AES256Encrypt(data);
        const customOption = {
            ...options,
            headers: {
                'proskills39': requestData.iv
            }
        }
        const response = await Axios.post<T>(url, data, customOption);
        const ivkey = response.headers["proskills39"];
        return AES256Decrypt(response.data, ivkey);
    }
    static async put<T>(url: string, data: unknown, options?: any) {
        const requestData = AES256Encrypt(data);
        const customOption = {
            ...options,
            headers: {
                'proskills39': requestData.iv
            }
        }
        const response = await Axios.put<T>(url, data, customOption);
        const ivkey = response.headers["proskills39"];
        return AES256Decrypt(response.data, ivkey);
    }
    static async delete<T>(url: string) {
        const response = await Axios.delete<T>(url);

        const ivkey = response.headers["proskills39"];
        return AES256Decrypt(response.data, ivkey);
    }
}