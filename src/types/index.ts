import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export interface QueryOptions {
    page?: number;
    limit?: number;
    language?: string;
}

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    authorization?: boolean;
    getLayout?: (page: ReactElement) => ReactNode;
};

export interface Attachment {
    id: string;
    original: string;
    thumbnail: string;
    __typename?: string;
}

export interface SEO {
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

export interface Settings {
    id: string;
    options: {
        siteTitle: string;
        siteSubtitle: string;
        currency: string;
        logo: Attachment;
        seo: SEO;
        contactDetails: ContactDetails;
    };
}
export interface SettingsQueryOptions extends QueryOptions {
    language?: string;
}

export interface Settings {
    id: string;
    options: {
        siteTitle: string;
        siteSubtitle: string;
        currency: string;
        logo: Attachment;
        seo: SEO;
        contactDetails: ContactDetails;
    };
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

export interface Challenge {
    challengeId: string;
    challengeName: string;
    tagline: string;
    description: string;
    summary: string;
    bannerImage: string;
    logoImage: string;
    totalProposal: number;
    challengeUrl: string;
    instruction: string;
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
    challengeId: number;
    challengeName: string;
    proposalName: string;
    summaryProposal: string;
    proposalLink: string;
    bugetProposal: number;
    voteCount: number;
    upVoteCount: number;
    downVoteCount: number;
    tags: string[];
    proposerInfor: ProposerInfor
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
