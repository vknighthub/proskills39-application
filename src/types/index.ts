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