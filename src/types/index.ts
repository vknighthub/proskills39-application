import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

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

export interface SettingQuery extends ResultObject<Settings> {}

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
    ratingImpAvg:number,
    ratingFeaAvg: number,
    ratingAuditAvg: number,
    assessmentDetail: Assessment []
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

export interface ProposalResult extends ResultInfoObject<ProposalDetailType> {}

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

