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
        numberofservice: 135,
        avatar: avatar,
        bestservice: [
            {
                id: 1, 
                image: project_thumb_1,
                link: '/services/1',
            },
            {
                id: 2,
                image: project_thumb_1,
                link: '/services/2',
            },
            {
                id: 3,
                image: project_thumb_1,
                link: '/services/3',
            }
        ]

    },
    {
        id: '02',
        link: '/seller/01',
        creator: 'Jackie Jones',
        tagName: '@JackieJ',
        numberofservice: 107,
        avatar: avatar,
        bestservice: [
            {
                id: 1,
                image: project_thumb_1,
                link: '/services/4',
            },
            {
                id: 2,
                image: project_thumb_1,
                link: '/services/5',
            },
            {
                id: 3,
                image: project_thumb_1,
                link: '/services/6',
            }
        ]
    },
    {
        id: '03',
        link: '/seller/01',
        creator: 'Noir Artworks',
        tagName: '@noirArtks',
        numberofservice: 94,
        avatar: avatar,
        bestservice: [
            {
                id: 1,
                image: project_thumb_1,
                link: '/services/7',
            },
            {
                id: 2,
                image: project_thumb_1,
                link: '/services/8',
            },
            {
                id: 3,
                image: project_thumb_1,
                link: '/services/9',
            }
        ]

    },
    {
        id: '04',
        link: '/seller/01',
        creator: 'The Green Goo',
        tagName: '@daGreenGoo',
        numberofservice: 83,
        avatar: avatar,
        bestservice: [
            {
                id: 1,
                image: project_thumb_1,
                link: '/services/10',
            },
            {
                id: 2,
                image: project_thumb_1,
                link: '/services/11',
            },
            {
                id: 3,
                image: project_thumb_1,
                link: '/services/12',
            }
        ]

    },
    {
        id: '05',
        link: '/seller/01',
        creator: 'Nicholas Stevens',
        tagName: '@nickstevens',
        numberofservice: 50,
        avatar: avatar,
        bestservice: [
            {
                id: 1,
                image: project_thumb_1,
                link: '/services/61',
            },
            {
                id: 2,
                image: project_thumb_1,
                link: '/services/62',
            },
            {
                id: 3,
                image: project_thumb_1,
                link: '/services/63',
            }
        ]

    },
    {
        id: '06',
        link: '/seller/01',
        creator: 'Bearded Wonder',
        tagName: '@beardedwndr',
        numberofservice: 26,
        avatar: avatar,
        bestservice: [
            {
                id: 1,
                image: project_thumb_1,
                link: '/services/68',
            },
            {
                id: 2,
                image: project_thumb_1,
                link: '/services/69',
            },
            {
                id: 3,
                image: project_thumb_1,
                link: '/services/63',
            }
        ]

    }
]

console.log(topcreator)

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
                                    <Image
                                        src={creator.avatar}
                                        alt="avatar"
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                    />
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
                        <div className="projects-numberofservice">
                            <div className="number title">{creator.numberofservice}</div>
                            <div className="label">Service</div>
                        </div>
                        {creator.bestservice.map((bestservice, index) => (
                            <div className="projects-bestservice" key={index}>
                                <div className="preview-box box-68">
                                    <Link href={bestservice.link}>
                                        <Image
                                            src={project_thumb_1}
                                            height={68}
                                            width={68}
                                            alt=""
                                            loading="lazy"
                                        />
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
