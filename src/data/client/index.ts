import { ChallegePaginator, Challenge, Proposal, ProposalQueryOptions, Settings, SettingsQueryOptions, User } from "@/types";
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
    fund = {
        all: () =>
            HttpClient.get(API_ENDPOINTS.DREP_FUND)
    }
    challenge = {
        all: (fundid: string | undefined) => HttpClient.get<ChallegePaginator>(`${API_ENDPOINTS.DREP_CHALLENGE}/${fundid}`),
        get: (fundid: string | undefined) => HttpClient.get<Challenge>(`${API_ENDPOINTS.DREP_CHALLENGE}/${fundid}`)
    }
    proposal = {
        all: (query?: ProposalQueryOptions) =>
            HttpClient.get(`${API_ENDPOINTS.DREP_PROPOSAL}/${query?.challengeId}`),
        get: (challengeid: string | undefined) => HttpClient.get<Proposal>(`${API_ENDPOINTS.DREP_PROPOSAL}/${challengeid}`)
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Client();
