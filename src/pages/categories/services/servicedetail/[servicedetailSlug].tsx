import Layout from '@/layouts/_layout';
import { NextPageWithLayout } from '@/types';
import ServiceDetailInfo from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailInfo';
import ServiceDetailMedia from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailMedia';
import ServiceDetailTab from './../../../../layouts/info/Service/ServiceDetail/ServiceDetailTab';
import product from '@/assets/images/content/product-img/product-1.png'



type Props = {}

const serverdetailinformation = {
    service: {
        slug: "serverdetail",
        servicename: "Breathing Nature",
        image: [
            {
                id: 1,
                image: product
            },
            {
                id: 2,
                image: product
            },
            {
                id: 3,
                image: product
            },
            {
                id: 4,
                image: product
            }
        ],
        price: {
            v2p: 2.31,
            usd: 125.31,
        },
        edition: {
            total: 40,
            bought: 1
        },
        description: "<p>Hello there! I am an experienced web developer and currently working on some nft projects.In this gig I will develop nft minting website, which let users to mint nfts from your collection.</p><p>What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>",

    },
    seller: {
        id: "seller1",
        username: "anhben",
        title: "Web and Blockchain Developer",
        rating: "5",
        country: "United States",
        membersince: "11/03/2023",
        lastdeliverydate: "10/03/2023",
        language: "English",
        introduce: "Hello there ! I am Hashintha from Sri Lanka. I am a web based program developer and currently working on several nft projects. In fiverr I will give my clients an excellent service in nft, crypto and more related services in blockchain development."
    },
    package: [
        {
            id: 1,
            name: "Basic",
            price: 2.31,
            promise: "I will promote your crowdfunding campaign to 100K real and active donors and backers.",
            numberofdaydelivery: 3,
            feature: [
                {
                    id: 1,
                    name: "Prompt writing",
                    isVisibility: 1,
                },
                {
                    id: 2,
                    name: "Prompt delivery",
                    isVisibility: 0,
                },
                {
                    id: 3,
                    name: "Generated image examples",
                    isVisibility: 0,
                },
                {
                    id: 1,
                    name: "Instructions",
                    isVisibility: 0,
                }
                ,
                {
                    id: 1,
                    name: "Artwork delivery",
                    isVisibility: 1,
                }
            ]
        },
        {
            id: 2,
            name: "Standard",
            price: 3.31,
            promise: "I will promote your crowdfunding campaign to 100K real and active donors and backers.",
            numberofdaydelivery: 3,
            feature: [
                {
                    id: 1,
                    name: "Prompt writing",
                    isVisibility: 1,
                },
                {
                    id: 2,
                    name: "Prompt delivery",
                    isVisibility: 0,
                },
                {
                    id: 3,
                    name: "Generated image examples",
                    isVisibility: 0,
                },
                {
                    id: 1,
                    name: "Instructions",
                    isVisibility: 0,
                }
                ,
                {
                    id: 1,
                    name: "Artwork delivery",
                    isVisibility: 1,
                }
            ]
        },
        {
            id: 3,
            name: "Premium",
            price: 5.31,
            promise: "I will promote your crowdfunding campaign to 100K real and active donors and backers.",
            numberofdaydelivery: 3,
            feature: [
                {
                    id: 1,
                    name: "Prompt writing",
                    isVisibility: 1,
                },
                {
                    id: 2,
                    name: "Prompt delivery",
                    isVisibility: 0,
                },
                {
                    id: 3,
                    name: "Generated image examples",
                    isVisibility: 0,
                },
                {
                    id: 1,
                    name: "Instructions",
                    isVisibility: 0,
                }
                ,
                {
                    id: 1,
                    name: "Artwork delivery",
                    isVisibility: 1,
                }
            ]
        }
    ],
    comparepackage: {
        listcompare: [
            {
                id: 1,
                name: 'Topic research',
                visibility: [
                    {
                        id: 'basic',
                        value: 0
                    },
                    {
                        id: 'standard',
                        value: 1
                    },
                    {
                        id: 'premium',
                        value: 1
                    }
                ]
            },
            {
                id: 2,
                name: 'SEO keywords',
                visibility: [
                    {
                        id: 'basic',
                        value: 1
                    },
                    {
                        id: 'standard',
                        value: 1
                    },
                    {
                        id: 'premium',
                        value: 1
                    }
                ]
            },
            {
                id: 3,
                name: 'SEO Keyword Research',
                visibility: [
                    {
                        id: 'basic',
                        value: 1
                    },
                    {
                        id: 'standard',
                        value: 1
                    },
                    {
                        id: 'premium',
                        value: 1
                    }
                ]
            },
            {
                id: 4,
                name: 'References & citations',
                visibility: [
                    {
                        id: 'basic',
                        value: 1
                    },
                    {
                        id: 'standard',
                        value: 1
                    },
                    {
                        id: 'premium',
                        value: 1
                    }
                ]
            },
            {
                id: 5,
                name: 'Data chart',
                visibility: [
                    {
                        id: 'basic',
                        value: 1
                    },
                    {
                        id: 'standard',
                        value: 1
                    },
                    {
                        id: 'premium',
                        value: 1
                    }
                ]
            }
        ],
        promise : [
            {
                id: 'basic',
                name: '1 Variation Images to explore your concept.'
            },
            {
                id: 'standard',
                name: '2 Variation Images to explore your concept. [Portrait] High upscale included	'
            },
            {
                id: 'premium',
                name: '1 Stunning HIGH Quality full body character design. + editing Ultra upscale included'
            }
        ],
        deliverytime: [
            {
                id:'basic',
                day: 3,
                fastday: 1,
                pricefaster: 3
            },
            {
                id:'standard',
                day: 5,
                fastday: 2,
                pricefaster: 6
            },
            {
                id:'premium',
                day: 7,
                fastday: 3,
                pricefaster: 9
            }
        ],
        totalprice: [
            {
                id: 'basic',
                price: 5
            },
            {
                id: 'standard',
                price: 15
            },
            {
                id: 'premium',
                price: 30
            }
        ]
    }
}


const ServiceDetail: NextPageWithLayout = (props: Props) => {
    console.log(serverdetailinformation)
    return (
        <div className="product-page product-version-1">

            <ServiceDetailMedia data={serverdetailinformation} compare = {serverdetailinformation.comparepackage} />
            <div className="product-info">
                <div className="product-info-wrapper">
                    <ServiceDetailInfo data={serverdetailinformation.service} />
                    <ServiceDetailTab data={serverdetailinformation.package} />
                </div>
            </div>
        </div>

    )
}
ServiceDetail.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default ServiceDetail