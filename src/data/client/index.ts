import { ApplyLetterInput, ApplyLetterResponse, AttendancedailyResponse, AuthResponse, BlogDetailResponse, BlogParams, BlogResponse, CategoriesPaginator, CategoryPaginator, ChallegePaginator, Challenge, ChallengeResult, ConnectWalletResponse, DealInput, FollowResponse, ForgotPasswordInput, ForgotPasswordResponse, FreelancerPaginator, GetParams, HomePageResult, InvitateFriendInput, InviteFriendResponse, LoginUserInput, NotificationResponse, ProposalQueryOptions, ProposalResult, RegisterUserInput, ServiceDealResponse, ServiceDetailPaginator, ServicePaginator, SettingQuery, SettingsQueryOptions, SubmitDealInput, SubmitDealResponse, UpdateProfileInput, UserInfoInput, UserProfilePageResponse, UserProfileResult, UserUpdateResult } from "@/types";
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
        forgotpassword: (input: ForgotPasswordInput) => HttpClient.post<ForgotPasswordResponse>(API_ENDPOINTS.FORGOT_PASSWORD, input),
        userinfo: ({ username }: UserInfoInput) => HttpClient.get<UserProfilePageResponse>(API_ENDPOINTS.USER_INFO, { username }),
        attendancedaily: () => HttpClient.post<AttendancedailyResponse>(API_ENDPOINTS.ATTENDANCEDAILY, {}),
        connectwallet: ({ walletname }: { walletname: string }) => HttpClient.post<ConnectWalletResponse>(API_ENDPOINTS.CONNECT_WALLET, { walletname }),
        follow:({username }: { username: string }) => HttpClient.post<FollowResponse>(API_ENDPOINTS.FOLLOW, { username })
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
        get: ({ slug, language, page, limit, seller, industry, frbudget, tobudget, deliverytime }: GetParams) => HttpClient.get<ServicePaginator>(`${API_ENDPOINTS.SERVICES}`, { slug, language, page, limit, seller, industry, frbudget, tobudget, deliverytime }),
        detail: ({ slug, language }: GetParams) => HttpClient.get<ServiceDetailPaginator>(`${API_ENDPOINTS.SERVICES_DETAIL}/${slug}`, { language }),
        deal: (slug: DealInput) => HttpClient.get<ServiceDealResponse>(API_ENDPOINTS.SERVICEDEAL, { ...slug }),
        applyletter: (input: ApplyLetterInput) => HttpClient.post<ApplyLetterResponse>(API_ENDPOINTS.APPLY_LETTER, input),
        getbyparent: ({ slug, language }: GetParams) => HttpClient.get<ServicePaginator>(`${API_ENDPOINTS.SERVICESBYPARENT}`, { slug, language }),
        submitdeal: (input: SubmitDealInput) => HttpClient.post<SubmitDealResponse>(API_ENDPOINTS.SUBMITDEAL, input),
        getall: (data: GetParams) => HttpClient.get<ServicePaginator>(API_ENDPOINTS.SERVICE_GETALL, data)
    }
    notification = {
        get: (params?: SettingsQueryOptions) => HttpClient.get<NotificationResponse>(API_ENDPOINTS.NOTIFICATION, { ...params })
    }
    blog = {
        get: (params?: SettingsQueryOptions) => HttpClient.get<BlogResponse>(API_ENDPOINTS.BLOG, { ...params }),
        getdetail: (param: BlogParams) => HttpClient.get<BlogDetailResponse>(API_ENDPOINTS.BLOGDETAIL, { ...param })
    }
    freelancer = {
        getbylevel: ({ slug, language, page, limit }: GetParams) => HttpClient.get<FreelancerPaginator>(API_ENDPOINTS.FREELANCER_BYLEVEL, { slug, language, page, limit })
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Client();
