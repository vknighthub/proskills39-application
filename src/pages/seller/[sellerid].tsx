import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import SellerHeader from '@/layouts/info/Seller/SellerHeader'
import ServiceListOfSeller from '@/layouts/info/Seller/ServiceListOfSeller'
import profilecover from '@/assets/images/content/profile/profile-cover-1.png'
import avatar from '@/assets/images/avatar.png'

type Props = {}



const sellerinfo = {
    id: 1,
    username: 'anhben',
    fullname: 'Anh Ben',
    title: 'Architect and Arch Viz Artist',
    cover: profilecover,
    avatar: avatar,
    rating: 5,
    from: 'Vietnam',
    membersince: '11/03/2023',
    lastdelivery: '10/03/2023',
    introduce: 'I am graduated in Architecture and Urbanism. I have experience in realistic photo rendering for approximately 5 years, I work for offices in my region and I try to broaden my horizons. I do 3D modeling of environments and also rendering, from the files provided by the client. Please do not order before contacting me , send me a message so we can discuss your project details .',
    language: {
        id: 'main',
        mainLanguage: 'Vietnam',
        other:
            [
                {
                    id: 'en',
                    name: 'English',
                },

                {
                    id: 'vi',
                    name: 'Vietnam',
                }
            ]
    },
    skills: {
        id: 'main',
        mainskills: 'Developer',
        others: [
            {
                id: 'dev',
                name: 'Developer'
            },
            {
                id: 'des',
                name: 'Design'
            }
        ]
    },
    education: {
        schoolname: "University of Agriculture and Forestry",
        year: '2012 - 2016'
    },
    wallet: {
        id: 'v2p',
        name: 'v2p',
        address: 'Ox465d53...d9c6',
        other: []
    }
}
const seller = {
    sellerinfo : sellerinfo,
    service: [
        {
            username : 'anhben',
            slug: "data-test",
            price: 10,
            overviews: {
                files: [
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/9c2cdfb4.jpg",
                        title: "Avatar-5-banner.jpg",
                        filename: "9c2cdfb4.jpg"
                    },
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/857fffcd.webp",
                        title: "MCDAVAT_FE094.webp",
                        filename: "857fffcd.webp"
                    },
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/d92aeb97.webp",
                        title: "MCDAVTH_WD058.webp",
                        filename: "d92aeb97.webp"
                    },
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/4212ef6d.webp",
                        title: "p0dnxrcv-16710704848821827978943-1671090117596-1671090117711578053756.webp",
                        filename: "4212ef6d.webp"
                    },
                    {
                        description: null,
                        type: "video",
                        url: "https://api.proskills39.com/services/videos/68285249.mp4",
                        title: "video_2023-02-22_21-12-10.mp4",
                        filename: "68285249.mp4"
                    },
                    {
                        description: null,
                        type: "video",
                        url: "https://api.proskills39.com/services/videos/bd96c971.mp4",
                        title: "video_2023-02-22_21-12-43.mp4",
                        filename: "bd96c971.mp4"
                    }
                ]
            },
            sellerInfor: {
                avatar: null
            }
        },
        {
            username : 'anhben',
            slug: "data-test",
            price: 10,
            overviews: {
                files: [
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/9c2cdfb4.jpg",
                        title: "Avatar-5-banner.jpg",
                        filename: "9c2cdfb4.jpg"
                    },
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/857fffcd.webp",
                        title: "MCDAVAT_FE094.webp",
                        filename: "857fffcd.webp"
                    },
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/d92aeb97.webp",
                        title: "MCDAVTH_WD058.webp",
                        filename: "d92aeb97.webp"
                    },
                    {
                        description: null,
                        type: "img",
                        url: "https://api.proskills39.com/services/images/4212ef6d.webp",
                        title: "p0dnxrcv-16710704848821827978943-1671090117596-1671090117711578053756.webp",
                        filename: "4212ef6d.webp"
                    },
                    {
                        description: null,
                        type: "video",
                        url: "https://api.proskills39.com/services/videos/68285249.mp4",
                        title: "video_2023-02-22_21-12-10.mp4",
                        filename: "68285249.mp4"
                    },
                    {
                        description: null,
                        type: "video",
                        url: "https://api.proskills39.com/services/videos/bd96c971.mp4",
                        title: "video_2023-02-22_21-12-43.mp4",
                        filename: "bd96c971.mp4"
                    }
                ]
            },
            sellerInfor: {
                avatar: null
            }
        }
    ]
}

const SellerProfile: NextPageWithLayout = (props: Props) => {
    console.log(seller);
    return (
        <div className="primary-content-area profile-page">
            <SellerHeader data={seller.sellerinfo} />
            <ServiceListOfSeller data={seller.service} />
        </div>
    )
}

SellerProfile.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default SellerProfile
