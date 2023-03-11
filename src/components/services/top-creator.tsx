import avatar from '@/assets/images/avatar.png';
import project_thumb_1 from '@/assets/images/content/previews/project-thumb-1.png';


import Image from "next/image";
import Link from "next/link";

const topcreator = [
    {
        id: '01',
        link: '/seller/01',
        creator: 'Dexter Stark',
        tagName: '@DexterStark',
        score: 135,
        previews: [
            {
                id: 1,
                link: '/05-product-page',
            },
            {
                id: 2,
                link: '/05-product-page',
            },
            {
                id: 3,
                link: '/05-product-page',
            }
        ]

    },
    {
        id: '02',
        link: '/seller/01',
        creator: 'Jackie Jones',
        tagName: '@JackieJ',
        score: 107,
        previews: [
            {
                id: 1,
                link: '/05-product-page',
            },
            {
                id: 2,
                link: '/05-product-page',
            },
            {
                id: 3,
                link: '/05-product-page',
            }
        ]
    },
    {
        id: '03',
        link: '/seller/01',
        creator: 'Noir Artworks',
        tagName: '@noirArtks',
        score: 94,
        previews: [
            {
                id: 1,
                link: '/05-product-page',
            },
            {
                id: 2,
                link: '/05-product-page',
            },
            {
                id: 3,
                link: '/05-product-page',
            }
        ]

    },
    {
        id: '04',
        link: '/seller/01',
        creator: 'The Green Goo',
        tagName: '@daGreenGoo',
        score: 83,
        previews: [
            {
                id: 1,
                link: '/05-product-page',
            },
            {
                id: 2,
                link: '/05-product-page',
            },
            {
                id: 3,
                link: '/05-product-page',
            }
        ]

    },
    {
        id: '05',
        link: '/seller/01',
        creator: 'Nicholas Stevens',
        tagName: '@nickstevens',
        score: 50,
        previews: [
            {
                id: 1,
                link: '/05-product-page',
            },
            {
                id: 2,
                link: '/05-product-page',
            },
            {
                id: 3,
                link: '/05-product-page',
            }
        ]

    },
    {
        id: '06',
        link: '/seller/01',
        creator: 'Bearded Wonder',
        tagName: '@beardedwndr',
        score: 26,
        previews: [
            {
                id: 1,
                link: '/05-product-page',
            },
            {
                id: 2,
                link: '/05-product-page',
            },
            {
                id: 3,
                link: '/05-product-page',
            }
        ]

    }
]

const HomeTopCreators = () => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Most popular  <span className="gradient-text">Seller</span>
                </div>
            </div>
            <div className="top-creators-box grid-2-columns">

                {topcreator.map((creator, index) => (
                    <div className="top-creator-item" key={index}>
                        <div className="creator-number">{creator.id}</div>
                        <div className="creator-box">
                            <div className="avatar box-64">
                                <Link href={creator.link}>
                                    <picture>
                                        <source type="/assets/images/avif" srcSet="/assets/images/avif/avatar.avif" />
                                        <Image
                                            src={avatar}
                                            alt="avatar"
                                            loading="lazy"
                                            width={100}
                                            height={100}
                                        />
                                    </picture>
                                    <span className="verified">
                                        <svg className="crumina-icon">
                                            <use xlinkHref="#check-icon" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <div className="creator-meta">
                                <div className="title">
                                    {" "}
                                    <Link href="/seller/01">
                                        {creator.creator}
                                    </Link>{" "}
                                </div>
                                <div className="creator-meta">{creator.tagName}</div>
                            </div>
                        </div>
                        <div className="projects-score">
                            <div className="number title">{creator.score}</div>
                            <div className="label">Service</div>
                        </div>
                        {creator.previews.map((previews, index) => (
                            <div className="projects-previews" key={index}>
                                <div className="preview-box box-68">
                                    <Link href={previews.link}>
                                        <picture>
                                            <source
                                                type="/assets/images/avif"
                                                srcSet="avif/content/previews/project-thumb-1.avif"
                                            />
                                            <Image
                                                src={project_thumb_1}
                                                height={68}
                                                width={68}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </picture>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}


            </div>
        </div>
    )
}
export default HomeTopCreators;
