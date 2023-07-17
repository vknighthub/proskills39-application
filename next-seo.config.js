// eslint-disable-next-line import/no-anonymous-default-export
export default {
    defaultTitle: "Proskills39",
    openGraph: {
        title: "Proskills39",
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_WEBSITE_URL,
        images: [
        {
            url: "https://api.proskills39.com/system/logo/logo-seo.png",
        },
        ],
        site_name: "Proskills39",
    },
    canonical:process.env.NEXT_PUBLIC_WEBSITE_URL_CANONICAL,
    twitter:{
        handle: "@vknighthub",
        site: "@vknighthub",
        handle: "@ProSkills39",
        site: "@ProSkills39",
        cardType: "summary_large_image",
    },
    description:"ProSkills39 is a Service Marketplace that connects pro-skills freelancers and provides support services for project owners to start up and expand their businesses at a reasonable cost.",
    additionalMetaTags: [
        {
        name: "viewport",
        content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
        {
        name: "Proskills39",
        content: "Proskills39",
        },
        {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        },
        {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
        },
        {
        name: "apple-mobile-web-app-title",
        content: "Me",
        },
        {
        name: "format-detection",
        content: "telephone=no",
        },
        {
        name: "mobile-web-app-capable",
        content: "yes",
        },
        {
        name: "msapplication-config",
        content: "/browserconfig.xml",
        },
        {
        name: "msapplication-TileColor",
        content: "#000000",
        },
        {
        name: "msapplication-tap-highlight",
        content: "no",
        },
        {
        name: "theme-color",
        content: "#000000",
        },
    ],

    additionalLinkTags: [],
};
