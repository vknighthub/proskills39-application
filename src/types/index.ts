import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';
import Categories from './../layouts/main/Categories';

export interface QueryOptions {
    page?: number;
    limit?: number;
    language?: string;
}

export interface QueryToken {
    token: string | null | undefined;
}
export interface GetParams {
    slug: string;
    language?: string;
}

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    authorization?: boolean;
    getLayout?: (page: ReactElement) => ReactNode;
};

export interface Attachment {
    id: string;
    imagetype?: string;
    original: string;
    thumbnail: string;
}
export interface Image {
    type: string;
    filename: string;
    title: string;
    url: string;
}

interface ResultObject<T> {
    result: {
        data: T
    }
}

export interface SEO {
    seo_id: number;
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: Attachment;
    twitterHandle: string;
    twitterCardType: string;
    metaTags: string;
    canonicalUrl: string;
}
export interface ShopSocials {
    icon: string;
    url: string;
}
export interface ContactDetails {
    socials: [ShopSocials];
    contact: string;
    location: Location;
    website: string;
    email: string;
}

export interface DeliveryTime {
    title: string;
    description: string;
}
export interface Settings {
    id: string;
    options: {
        option_id: number;
        siteTitle: string;
        taxClass: number;
        dark_logo: Attachment;
        deliveryTime: DeliveryTime;
        siteSubtitle: string;
        currency: string;
        logo: Attachment;
        seo: SEO;
        contactDetails: ContactDetails;
        signupPoints: number;
        minimumOrderAmount: number;
        maximumQuestionLimit: number;
        currencyToWalletRatio: string;
    },
    language: string,
    created_at: Date,
    updated_at: Date;
}

export interface SettingQuery extends ResultObject<Settings> { }

export interface SettingsQueryOptions extends QueryOptions {
    language?: string;
}

export interface User {
    id: string;
    name: string;
    profile: {
        id: string;
        bio: string;
        contact: string;
        avatar: Attachment;
    };
    role: string;
    created_at: string;
    updated_at: string;
}

export interface LoginUserInput {
    username: string;
    password: string;
}

export interface RegisterUserInput {
    username: string,
    fullname: string,
    gender: number,
    address: string,
    email: string,
    birthday: string,
    phone: string
}

export interface UserProfileResult {
    result: {
        data: UserProfile
    }
}

export interface UserProfile {
    usrid: number,
    username: string,
    fullname: string,
    firstname: string,
    midname: string,
    lastname: string,
    gender: number,
    country: string,
    city: string,
    province: string,
    district: string,
    address: string,
    email: string,
    birthday: Date,
    phone: string,
    lastlogintime: Date,
    status: string,
    datecreated: Date,
    datemodified: Date,
    islogin: boolean,
    expiretime: Date,
    failnumber: number,
    avatar: string,
    faceid: string,
    licensetype: string,
    licenseid: string,
    aboutme: string,
    descriptions: string,
    lastdelivery: Date,
    token: string | null | undefined,
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
export interface AuthResponse {
    errorcode: string;
    messagedetail: string;
    result: {
        status: number;
        data: UserInfor
    }
}


export interface Contributors {
    id: number;
    name: string;
    identityHidden: boolean;
    username: string;
    avatar: string
}

export interface ProposerInfor {
    id: number;
    name: string;
    userName: string;
    globalModerator: boolean;
    admin: boolean;
    ideaCount: number;
    voteCount: number;
    commentCount: number;
    avatarUrl: string;
    profileQuestions: JSON,
    kudoCount: number;
}
export interface Proposal {
    proposalId: number;
    proposalName: string;
    summaryProposal: string;
    descriptionDetail: string;
    proposalLink: string;
    bugetProposal: number;
    voteCount: number;
    upVoteCount: number;
    downVoteCount: number;
    tags: string[];
    proposerInfor: ProposerInfor,
    contributors: Contributors[]
}

export interface Challenge {
    challengeId: string;
    challengeName: string;
    challengeImage: string;
    challengeImageAltText: string;
    challengeDescription: string;
    voteCount: number;
    commentCount: number;
    challengeUrl: string;
    listProposal: Proposal[] | undefined;
}
export interface ProposalDetailType {
    challenge_infor: Challenge;
    proposal_infor: Proposal;
    assessment_infor: AssessmentDetail;
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
    challengeId?: number;
}


interface PaginatorInfo<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: any[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
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
    id: number;
    name: string;
    slug: string;
    language: string;
    icon: string | undefined;
    image: string;
    details: string | undefined;
    type_id: string | undefined;
    created_at: Date | undefined;
    updated_at: Date | undefined;
    deleted_at: Date | undefined;
    translated_languages: string | undefined;
    type: string | undefined;
    parent_id: number;
    url: string | undefined;
    menu_level: number;
    slice_number: number;
    menutype: string | undefined;
    totalservices: number;
    children: undefined;
}
export interface CategoriesPaginator extends ResultInfo<Category> { }

export interface OverviewFiles {
    description: string;
    type: string;
    url: string;
    title: string;
    filename: string
}
export interface ServiceOverview {
    files: OverviewFiles[]
}

export interface SellerService {
    fullname: string;
    joindate: Date;
    avatar: string;
    address: {
        country: string;
        city: string;
        province: string;
        district: string;
    },
    aboutme: string;
    lastdelivery: Date;
}

export interface Service {
    id: number;
    keyid: string;
    cate_id: number;
    username: string;
    title: string;
    slug: string;
    language: string;
    descriptions: string;
    status: string;
    tags: string;
    price: number;
    sale_price: number;
    min_price: number;
    max_price: number;
    totalview: number;
    totalorder: number;
    totalcomment: number;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
    overviews: ServiceOverview;
    sellerInfor: SellerService;
}


interface ServiceResultInfo<T> {
    result: {
        data: {
            categoriesslug: string;
            categoriesname: string;
            image: string;
            listservice: T[];
            listservicepopular: T[];
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
    id: number;
    name: string;
    link: string;
    slug: string;
}

interface SubCategory {
    id: number;
    name: string;
    image: string;
    subject: SubjectCategories[];
}

interface FAQCategory {
    id: number;
    question: string;
    slug: string;
    anwser: string;
    order: string;
}
interface PopolarCategory {
    id: number;
    name: string;
    slug: string;
    image: string;
    link: string;
}
export interface Category {
    name: string;
    image: string;
    url: string | undefined;
    description: string;
    listCategories: SubCategory[];
    listFaq: FAQCategory[];
    listPopular: PopolarCategory[];
}

interface PriceService {
    usd: number;
    v2p: number;
}
interface EditionService {
    total: number;
    boutgh: number;
}
interface ServiceDetailInfo {
    serviceId: number;
    slug: string;
    servicename: string;
    price: PriceService;
    edition: EditionService;
    image: Image[];
    description: string;
    username: string;
}
interface SellerServiceDetail {
    id: number;
    country: string;
    rating: number;
    title: string;
    usernames: string;
    membersince: Date;
    lastdelivery: Date;
    introduce: string;
    language: string;
}
interface Feature {
    id: number;
    name: string;
    isVisibility: number;
}
export interface Package {
    id: number;
    name: string;
    price: number;
    promise: string;
    numberofdaydelivery: number;
    serviceId: number;
    feature: Feature[];
}

interface VisibilityCompare {
    id: string;
    value: number;
}
interface ListCompare {
    id: number;
    name: string;
    visibility: VisibilityCompare[]
}
interface Promise {
    id: string;
    name: string;
}
interface DeliveryTimePackage {
    id: string;
    day: number;
    fastday: number;
    pricefaster: number;
}
interface TotalPricePackage {
    id: string;
    price: number;
}
export interface ComparePackage {
    listcompare: ListCompare[];
    promise: Promise[];
    deliverytime: DeliveryTimePackage[];
    totalprice: TotalPricePackage[];
    serviceId: number;
}
export interface ServiceDetail {
    services: ServiceDetailInfo;
    seller: SellerServiceDetail;
    package: Package[];
    comparepackage: ComparePackage;
}

export interface ServicePaginator extends ServiceResultInfo<Service> { }


export interface CategoryPaginator extends CategoriesResultInfo<Category> { }


export interface ServiceDetailPaginator extends ServiceDetailResultInfo<ServiceDetail> { }
