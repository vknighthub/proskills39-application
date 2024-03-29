import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

export interface QueryOptions {
    page?: number
    limit?: number
    language?: string
}

export interface QueryToken {
    token: string | null | undefined
}
export interface GetParams {
    slug?: string
    language?: string
    page?: number
    limit?: number
    seller?: string
    deliverytime?: number
    frbudget?: number
    tobudget?: number
    industry?: number
}
export interface DefaultParams {
    language?: string
}

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    authorization?: boolean
    getLayout?: (page: ReactElement) => ReactNode
}

export interface Attachment {
    id: string
    imagetype?: string
    original: string
    thumbnail: string
}
export interface Image {
    type: string
    filename: string
    title: string
    url: string
}

interface ResultObject<T> {
    result: {
        data: T
    }
}

export interface SEO {
    seo_id: number
    metaTitle: string
    metaDescription: string
    ogTitle: string
    ogDescription: string
    ogImage: Attachment
    twitterHandle: string
    twitterCardType: string
    metaTags: string
    canonicalUrl: string
}
export interface ShopSocials {
    icon: string
    url: string
}
export interface ContactDetails {
    socials: [ShopSocials]
    contact: string
    location: Location
    website: string
    email: string
}

export interface DeliveryTime {
    title: string
    description: string
}
export interface Settings {
    id: string
    options: {
        option_id: number
        siteTitle: string
        taxClass: number
        dark_logo: Attachment
        deliveryTime: DeliveryTime
        siteSubtitle: string
        currency: string
        logo: Attachment
        seo: SEO
        contactDetails: ContactDetails
        signupPoints: number
        minimumOrderAmount: number
        maximumQuestionLimit: number
        currencyToWalletRatio: string
    },
    language: string,
    created_at: Date,
    updated_at: Date
}

export interface Popuparcategory {
    id: number
    name: string
    slug: string
    icon: string
    featured: boolean
    react: number
    details: string
    image: string
}

export interface Mostpopularservice {
    id: number
    name: string
    image: string
    link: string
    slug: string
}

export interface Newestservice {
    id: number
    keyid: number
    cate_id: number
    catname: string
    username: string
    title: string
    slug: string
    language: string
    introduce: string
    descriptions: string
    status: string
    tags: string
    price: number
    sale_price: any
    min_price: number
    max_price: number
    totalview: any
    totalorder: any
    totalcomment: any
    create_at: string
    update_at: string
    delete_at: any
    averagerating: number
    files: File[]
    sellerInfor: SellerInfor
}

export interface File {
    type: string
    url: string
    title: string
    filename: string
}

export interface SellerInfor {
    username: string
    fullname: string
    joindate: string
    avatar: string
    address: Address
    aboutme: any
    lastdelivery: any
}

export interface Address {
    country: string
    city: string
    province: string
    district: string
}

export interface Bestservice {
    id: number
    image: string
    link: string
}

export interface Mostpopularseller {
    id: number
    creator: string
    tagName: string
    numberofservice: number
    avatar?: string
    bestservice: Bestservice[]
    level: number
}

export interface FreelancersLevel {
    id: number
    title: string
    description: string
    image: string
    level: number
    icon: string
    slug: string
}

export interface HomePage {
    popuparcategories: Popuparcategory[]
    mostpopularseller: Mostpopularseller[]
    mostpopularservice: Mostpopularservice[]
    newestservice: Newestservice[]
    freelancerlevel: FreelancersLevel[]
}

export interface SettingQuery extends ResultObject<Settings> { }

export interface HomePageResult extends ResultObject<HomePage> { }
export interface SettingsQueryOptions extends QueryOptions {
    language?: string
}

export interface User {
    id: string
    name: string
    profile: {
        id: string
        bio: string
        contact: string
        avatar: Attachment
    }
    role: string
    created_at: string
    updated_at: string
}

export interface LoginUserInput {
    username: string
    password: string
}

export interface RegisterUserInput {
    username: string
    fullname: string
    address: string
    email: string
    phone: string
    referrer?: string
    gdpr?: boolean
}

export interface UpdateProfileInput {
    username: string
    fullname: string
    email: string
    phone: string
    address: string
}
export interface UserUpdateResult {

}

export interface UserProfileResult {
    result: {
        data: UserProfile
    }
}
export interface Social {
    socialId: number
    username: string
    type: string
    name: string
    url: string
}

export interface Wallet {
    walletaddress: string
    username: string
    walletname: any
    wallettype: any
    status: string
}
export interface UserProfile {
    usrid: number
    username: string
    fullname: string
    gender: number
    country: string
    city: string
    province: string
    district: string
    address: string
    email: string
    birthday: string
    phone: string
    lastlogintime: string
    status: string
    datecreated: string
    datemodified: any
    islogin: boolean
    expiretime: any
    failnumber: any
    avatar: string
    faceid: any
    licensetype: any
    licenseid: any
    aboutme: any
    descriptions: any
    lastdelivery: any
    token: string
    token_type: string
    first_login: boolean
    socials?: Social[]
    wallet?: Wallet[]
    isSeller?: boolean
    isBuyer?: boolean
    banner: string
    balance: number
    point: number
    isAttendance: boolean
    sellertype: string
    availability: string
    language: string
    languagelevel: string
    inqueueservice: number
    completeservice: number
    completeproject: number
    totalreviews: number
    rateofrating: number
    freelancerlevel: FreelancersLevel
    isConnectWallet: boolean
    walletName: string
    isFollow: boolean
}
export interface UserInfor {
    username: string,
    firstname: string,
    lastname: string,
    gender: number,
    address: string,
    email: string,
    birthday: Date,
    phone: string,
    status: string,
    usercreated: Date,
    datecreated: Date,
    expiretime: Date,
    isshow: number,
    failnumber: number,
    token: string,
    token_type: string,
    avatar: string,
    faceid: string
}
export interface Auth {
    token: string
    permission: string[]
    first_login: boolean
}
export interface AuthResponse {
    errorcode: string
    messagedetail: string
    result: {
        status: number
        data: Auth
    }
}


export interface Contributors {
    id: number
    name: string
    identityHidden: boolean
    username: string
    avatar: string
}

export interface ProposerInfor {
    id: number
    name: string
    userName: string
    globalModerator: boolean
    admin: boolean
    ideaCount: number
    voteCount: number
    commentCount: number
    avatarUrl: string
    profileQuestions: JSON,
    kudoCount: number
}
export interface Proposal {
    proposalId: number
    proposalName: string
    summaryProposal: string
    descriptionDetail: string
    proposalLink: string
    bugetProposal: number
    voteCount: number
    upVoteCount: number
    downVoteCount: number
    tags: string[]
    proposerInfor: ProposerInfor,
    contributors: Contributors[]
}

export interface Challenge {
    challengeId: string
    challengeName: string
    challengeImage: string
    challengeImageAltText: string
    challengeDescription: string
    voteCount: number
    commentCount: number
    challengeUrl: string
    listProposal: Proposal[] | undefined
}
export interface ProposalDetailType {
    challenge_infor: Challenge
    proposal_infor: Proposal
    assessment_infor: AssessmentDetail
}

export interface Assessment {
    assessmentId: number,
    assessor: string,
    impactTitle: string,
    impactAssessment: string,
    impactRating: number,
    feaTitle: string,
    feaAssessment: string,
    feaRating: number,
    auditTitle: string,
    auditAssessment: string,
    audittRating: number,
    proposerReply: string
}

export interface AssessmentSummary {
    st2proposalIdst2: number,
    st2proposalTitlest2: string,
    st2proposerst2: string,
    st2proposerNamest2: string,
    st2ratingAvgst2: number,
    st2ratingImpAvgst2: number,
    st2ratingFeaAvgst2: number,
    st2ratingAuditAvgst2: number,
    st2summaryAssessmentst2: string,
    st2summaryReplyst2: string,
    st2languagest2: string
}

export interface AssessmentDetail {
    summaryAssement: string,
    summaryReply: string,
    ratingAvg: number,
    ratingImpAvg: number,
    ratingFeaAvg: number,
    ratingAuditAvg: number,
    assessmentDetail: Assessment[]
}

export interface ProposalQueryOptions {
    top?: string
    language?: string
    page?: number
    limit?: number
    search?: string
}


interface PaginatorInfo<T> {
    current_page: number
    data: T[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: any[]
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}
interface ResultInfo<T> {
    result: {
        data: T[]
    }
}

interface ResultInfoObject<T> {
    result: {
        data: T
    }
}

export interface ChallegePaginator extends ResultInfo<Challenge> { }

export interface ProposalResult extends ResultInfoObject<ProposalDetailType> { }
export interface ChallengeResult extends ResultInfoObject<Challenge> { }


export interface Category {
    id: number
    name: string
    slug: string
    language: string
    icon: string | undefined
    image: string
    details: string | undefined
    type_id: string | undefined
    created_at: Date | undefined
    updated_at: Date | undefined
    deleted_at: Date | undefined
    translated_languages: string | undefined
    type: string | undefined
    parent_id: number
    url: string | undefined
    menu_level: number
    slice_number: number
    menutype: string | undefined
    totalservices: number
    children: undefined
}
export interface CategoriesPaginator extends ResultInfo<Category> { }

export interface OverviewFiles {
    description: string
    type: string
    url: string
    title: string
    filename: string
}
export interface ServiceOverview {
    files: OverviewFiles[]
    introduce: string
}

export interface SellerService {
    fullname: string
    joindate: Date
    avatar: string
    address: {
        country: string
        city: string
        province: string
        district: string
    },
    aboutme: string
    lastdelivery: Date
    username: string
}

export interface Industry {
    id: number
    name: string
}
export interface Service {
    averagerating: number
    introduce: string
    tstar: number
    id: number
    keyid: string
    cate_id: number
    username: string
    title: string
    slug: string
    language: string
    descriptions: string
    status: string
    tags: string
    price: number
    sale_price: number
    min_price: number
    max_price: number
    totalview: number
    totalorder: number
    totalcomment: number
    create_at: Date
    update_at: Date
    delete_at: Date
    overviews: ServiceOverview
    sellerInfor: SellerService
    listindustry: Industry[]
}


interface ServiceResultInfo<T> {
    result: {
        currentpage: number
        limit: number
        status: number
        total: number
        totalpage: number
        data: {
            categoriesslug: string
            categoriesname: string
            image: string
            listservice: T[]
            listservicepopular: T[]
            listsellerpopular: SellerInfor[]
            listcatechild: T[]
        }
    }
}

interface ServiceDetailResultInfo<T> {
    result: {
        data: T
    }
}

interface CategoriesResultInfo<T> {
    result: {
        data: T
    }
}

interface SubjectCategories {
    id: number
    name: string
    link: string
    slug: string
}

interface SubCategory {
    id: number
    name: string
    image: string
    subject: SubjectCategories[]
}

interface FAQCategory {
    id: number
    question: string
    slug: string
    anwser: string
    order: string
}
export interface PopolarCategory {
    id: number
    name: string
    slug: string
    image: string
    link: string
    totalorder: number
}
export interface Category {
    name: string
    image: string
    url: string | undefined
    description: string
    listCategories: SubCategory[]
    listFaq: FAQCategory[]
    listPopular: PopolarCategory[]
}

interface PriceService {
    usd?: number
    v2p: number
    vnd: number
}
interface EditionService {
    total: number
    boutgh: number
}
interface ServiceDetailInfo {
    serviceId: number
    slug: string
    servicename: string
    price: PriceService
    edition: EditionService
    image: Image[]
    description: string
    username: string
}
interface SellerServiceDetail {
    id: number
    country: string
    rating: number
    title: string
    usernames: string
    membersince: Date
    lastdelivery: Date
    introduce: string
    language: string
}
interface Feature {
    id: number
    name: string
    isVisibility: number
}
export interface Package {
    id: number
    name: string
    price: number
    promise: string
    numberofdaydelivery: number
    serviceId: number
    feature: Feature[]
}

interface VisibilityCompare {
    id: string
    value: number
}
interface ListCompare {
    id: number
    name: string
    visibility: VisibilityCompare[]
}
interface Promise {
    id: string
    name: string
}
interface DeliveryTimePackage {
    id: string
    day: number
    fastday: number
    pricefaster: number
}
interface TotalPricePackage {
    id: string
    price: number
}
export interface ComparePackage {
    listcompare: ListCompare[]
    promise: Promise[]
    deliverytime: DeliveryTimePackage[]
    totalprice: TotalPricePackage[]
    serviceId: number
}
export interface ServiceDetail {
    services: ServiceDetailInfo
    seller: SellerServiceDetail
    package: Package[]
    comparepackage: ComparePackage
}

export interface ServicePaginator extends ServiceResultInfo<Service> { }


export interface CategoryPaginator extends CategoriesResultInfo<Category> { }

export interface TopCategoryPaginator extends ResponseArray<PopolarCategory> { }

export interface ServiceDetailPaginator extends ServiceDetailResultInfo<ServiceDetail> { }

interface ResponseObject<T> {
    errorcode: number
    messagedetail: string
    result: {
        status: number
        data: T
    }
}

interface ResponseArray<T> {
    errorcode: number
    messagedetail: string
    result: {
        status: number
        data: T[]
    }
}

export interface NotificationDetail {
    id: number
    sender: string
    receiver: string
    title: string
    project: string
    slug: string
    datetime: string
    timestamp: Date
    isread: boolean
    language: string
    image: string
}

export interface Notification {
    total: number
    data: NotificationDetail[]

}

export interface NotificationResponse extends ResponseObject<Notification> { }

export interface DealInput {
    slug: string
}
export interface Listfile {
    id: number
    title: string
    name: string
    type: string
    link: string
}
export interface ServiceDeal {
    id: number
    cate_id: number
    username: string
    fullname: string
    avatar: string
    banner: string
    title: string
    slug: string
    language: string
    descriptions: string
    status: string
    tags: string
    price: number
    sale_price: number
    min_price: number
    max_price: number
    numberofdaydelivery: number
    totalview: number
    totalorder: number
    totalcomment: number
    create_at: string
    update_at: string
    approveddate: string
    userapproved: string
    userdeleted: string
    listfile: Listfile[]
}

export interface InvitateFriendInput {
    receivermail: string
    receivername: string
}

export interface InviteFriendResponse extends ResponseObject<{}> { }

export interface News {
    id: number
    image: string
    catalog: string
    title: string
    content: string
}
export interface Business {
    id: number
    image: string
    catalog: string
    title: string
    content: string
}

export interface Freelancers {
    id: number
    image: string
    catalog: string
    title: string
    content: string
}


export interface DealProjectInput {
    price: number
    numberofdaydelivery: number
}

export interface ApplyLetterInput {
    serviceid?: number
    price: number
    duedt: Date
    descriptions: string
}

export interface ServiceDealResponse extends ResponseObject<ServiceDeal> { }
export interface ApplyLetterResponse extends ResponseObject<{}> { }

export interface ForgotPasswordInput {
    username: string
    email: string
    code?: string
}


export interface ForgotPasswordResponse {
    errorcode: number
    messagedetail: string
    result: {

    }
}
export interface Catalog {
    id: number
    name: string
}
export interface BlogDetail {
    id: number
    slug: string
    image: string
    catalog: Catalog
    introduce: string
    title: string
    content: string
    publdt: string,
    author: {
        username: string
        fullname: string
        avatar: string
    }
    typefile: string
}
export interface Blogbyuser {
    status: number
    currentpage: number
    limit: number
    totalpage: number
    total: number
    data: BlogDetail[]
}
export interface Blogbycatagories {
    status: number
    currentpage: number
    limit: number
    totalpage: number
    total: number
    data: BlogDetail[]
}

export interface Blogtopview {
    status: number
    currentpage: number
    limit: number
    totalpage: number
    total: number
    data: BlogDetail[]
}

export interface Blog {
    blog: BlogDetail[]
    news: any[]
    business: any[]
    freelancer: any[]
}

export interface BlogResponse extends ResponseObject<Blog> { }

export interface BlogParams {
    slug: string | string[] | undefined
    language?: string
}

export interface BlogDetailResponse extends ResponseObject<{
    blogdetail: BlogDetail
    blogbyuser: Blogbyuser
    blogbycatagories: Blogbycatagories
    blogtopview: Blogtopview
}> { }


export interface SubmitDealInput {
    serviceid: number
    description: string
}

export interface SubmitDealResponse extends ResponseObject<{}> { }


export interface ServiceData {
    id: number
    cate_id: number
    catemasterid: number
    cateparentid: number
    industry_id: number
    username: string
    title: string
    slug: string
    language: string
    descriptions: string
    status: string
    tags: string
    type: string
    price: number
    sale_price: any
    min_price: number
    max_price: number
    numberofdaydelivery: number
    totalview: any
    totalorder: any
    totalcomment: any
    ostar: number
    tstar: number
    thstar: number
    fostar: number
    fistar: number
    averagerating: number
    create_at: string
    update_at: string
    delete_at: any
    approveddate: any
    userapproved: any
    expired_date: string
    introduce: string
    overviews: ServiceOverview
    sellerInfor: SellerInfor
}

export interface Allservice {
    status: number
    currentpage: number
    limit: number
    totalpage: number
    total: number
    data: ServiceData[]
}

export interface Servicepopular {
    status: number
    currentpage: number
    limit: number
    totalpage: number
    total: number
    data: ServiceData[]
}

export interface Servicetopaverage {
    status: number
    currentpage: number
    limit: number
    totalpage: number
    total: number
    data: ServiceData[]
}
export interface UserServices {
    allservice: Allservice
    servicepopular: Servicepopular
    servicetopaverage: Servicetopaverage
}
export interface UserProfilePage {
    profile: UserProfile
    services: UserServices
}

export interface UserProfilePageResponse extends ResponseObject<UserProfilePage> { }

export interface UserInfoInput {
    username: string
}

export interface Freelancer {
    avatar: string
    username: string
    fullname: string
    aboutme: string
    totalordersuccess: number
    level: number
    level_title: string
    level_icon: string
    joindate: string
}
export interface FreelancerData {
    status: number
    currentpage: number
    limit: number
    totalpage: number
    total: number
    data: {
        title: string
        listdata: Freelancer[]
    }
}

export interface FreelancerPaginator extends ResponseObject<FreelancerData> { }


export interface AttendancedailyResponse extends ResponseObject<{}> { }
export interface ConnectWalletResponse extends ResponseObject<{}> { }
export interface FollowResponse extends ResponseObject<{}> { }


export interface GetParamsProposal {
    top?: string
    language?: string
    page?: number
    limit?: number
    search?: string
}
export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type StatusObjType = {
    busy: ThemeColor
    away: ThemeColor
    online: ThemeColor
    offline: ThemeColor
}

export interface ListProposalIDResult extends ResponseArray<number> { }