import { AuthResponse, CategoriesPaginator, Category, CategoryPaginator, ChallegePaginator, Challenge, ChallengeResult, GetParams, LoginUserInput, Proposal, ProposalQueryOptions, ProposalResult, RegisterUserInput, Service, ServicePaginator, SettingQuery, Settings, SettingsQueryOptions, UserProfileResult } from "@/types";
import { API_ENDPOINTS } from "./endpoints";
import { HttpClient } from './http-client';

class Client {
    settings = {
        all: (params?: SettingsQueryOptions) =>
            HttpClient.get<SettingQuery>(API_ENDPOINTS.SETTINGS, { ...params })
    }
    users = {
        me: () => HttpClient.get<UserProfileResult>(API_ENDPOINTS.USERS_ME),
        logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
        login: (input: LoginUserInput) =>
            HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
        register: (input: RegisterUserInput) =>
            HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
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
        get: (challengeid: string | undefined) => HttpClient.get<ChallengeResult>(`${API_ENDPOINTS.DREP_PROPOSAL}/${challengeid}`),
        getbyid: (proposalid: string | undefined, language: string | undefined) => HttpClient.get<ProposalResult>(`${API_ENDPOINTS.DREP_PROPOSALBYID}/${proposalid}`, {
            language
        })
    }
    categories = {
        all: (params?: SettingsQueryOptions) =>
            HttpClient.get<CategoriesPaginator>(API_ENDPOINTS.CATEGORIES, { ...params }),
        get: ({ slug, language }: GetParams) => HttpClient.get<CategoryPaginator>(`${API_ENDPOINTS.CATEGORIESPAGE}/${slug}`, { language }),

    }
    services = {
        get: ({ slug, language }: GetParams) => HttpClient.get<ServicePaginator>(`${API_ENDPOINTS.SERVICES}/${slug}`, { language })
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Client();
