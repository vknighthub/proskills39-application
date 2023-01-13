import { Settings, SettingsQueryOptions, User } from "@/types";
import { API_ENDPOINTS } from "./endpoints";
import { HttpClient } from './http-client';

class Client {
    settings = {
        all: (params?: SettingsQueryOptions) =>
            HttpClient.get<Settings>(API_ENDPOINTS.SETTINGS, { ...params })
    }
    users = {
        me: () => HttpClient.get<User>(API_ENDPOINTS.USERS_ME),
        logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    }
}
export default new Client();
