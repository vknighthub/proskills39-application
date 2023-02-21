import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export interface QueryOptions {
    page?: number;
    limit?: number;
    language?: string;
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

export interface AuthResponse {
    errorcode: string;
    messagedetail: string;
    result: {
        token: string;
        permissions: string[];
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
    assessment_infor: JSON;
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

export interface ChallegePaginator extends ResultInfo<Challenge> { }


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

