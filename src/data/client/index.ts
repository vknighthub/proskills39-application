import { ApplyLetterInput, ApplyLetterResponse, AuthResponse, BlogDetailResponse, BlogParams, BlogResponse, CategoriesPaginator, Category, CategoryPaginator, ChallegePaginator, Challenge, ChallengeResult, DealInput, ForgotPasswordInput, ForgotPasswordResponse, GetParams, HomePageResult, InvitateFriendInput, InviteFriendResponse, LoginUserInput, NotificationResponse, Proposal, ProposalQueryOptions, ProposalResult, RegisterUserInput, Service, ServiceDealResponse, ServiceDetailPaginator, ServicePaginator, SettingQuery, Settings, SettingsQueryOptions, UpdateProfileInput, UserProfileResult, UserUpdateResult } from "@/types";
import { API_ENDPOINTS } from "./endpoints";
import { HttpClient } from './http-client';

class Client {
    settings = {
        all: (params?: SettingsQueryOptions) =>
            HttpClient.get<SettingQuery>(API_ENDPOINTS.SETTINGS, { ...params }),
        homepage: (params?: SettingsQueryOptions) => HttpClient.get<HomePageResult>(API_ENDPOINTS.HOMEPAGE, { ...params }),
    }
    users = {
        me: () => HttpClient.get<UserProfileResult>(API_ENDPOINTS.USERS_ME),
        logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
        login: (input: LoginUserInput) =>
            HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
        register: (input: RegisterUserInput) =>
            HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
        updateprofile: (user: UpdateProfileInput) =>
            HttpClient.put<UserUpdateResult>(`${API_ENDPOINTS.UPDATE_USER}`, user),
        invitefriend: (input: InvitateFriendInput) => HttpClient.post<InviteFriendResponse>(API_ENDPOINTS.INVITE_FRIEND, input),
        forgotpassword: (input: ForgotPasswordInput) => HttpClient.post<ForgotPasswordResponse>(API_ENDPOINTS.FORGOT_PASSWORD, input)
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
        get: ({ slug, language, page, limit }: GetParams) => HttpClient.get<ServicePaginator>(`${API_ENDPOINTS.SERVICES}`, { slug, language, page, limit }),
        detail: ({ slug, language }: GetParams) => HttpClient.get<ServiceDetailPaginator>(`${API_ENDPOINTS.SERVICES_DETAIL}/${slug}`, { language }),
        deal: (slug: DealInput) => HttpClient.get<ServiceDealResponse>(API_ENDPOINTS.SERVICEDEAL, { ...slug }),
        applyletter: (input: ApplyLetterInput) => HttpClient.post<ApplyLetterResponse>(API_ENDPOINTS.APPLY_LETTER, input),
        getbyparent: ({ slug, language }: GetParams) => HttpClient.get<ServicePaginator>(`${API_ENDPOINTS.SERVICESBYPARENT}/${slug}`, { language }),

    }
    notification = {
        get: (params?: SettingsQueryOptions) => HttpClient.get<NotificationResponse>(API_ENDPOINTS.NOTIFICATION, { ...params })
    }
    blog = {
        get: (params?: SettingsQueryOptions) => HttpClient.get<BlogResponse>(API_ENDPOINTS.BLOG, { ...params }),
        getdetail: (param: BlogParams) => HttpClient.get<BlogDetailResponse>(API_ENDPOINTS.BLOGDETAIL, { ...param })
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Client();
