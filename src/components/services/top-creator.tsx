import avatar from '@/assets/images/avatar.png';
import project_thumb_1 from '@/assets/images/content/previews/project-thumb-1.png';
import { Mostpopularseller } from '@/types';


import Image from "next/image";
import Link from "next/link";

type Props = {
    data: Mostpopularseller[]
}

const Homedatas = ({ data }: Props) => {
    return (
        <div className="container section-padding">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Most popular  <span className="gradient-text">Seller</span>
                </div>
            </div>
            <div className="top-creators-box grid-2-columns">

                {data.map((creator, index) => (
                    <div className="top-creator-item" key={index}>
                        <div className="creator-number">{creator.id}</div>
                        <div className="creator-box" style={{ minWidth: 250 }}>
                            <div className="avatar box-64">
                                <Link href={`/user-profile/${creator.tagName}`}>
                                    <Image
                                        src={creator?.avatar ? creator?.avatar : avatar}
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
                                    <Link href={`/user-profile/${creator.tagName}`}>
                                        {creator.creator}
                                    </Link>{" "}
                                </div>
                                <div className="creator-meta">{creator.tagName}</div>
                            </div>
                        </div>
                        {creator.bestservice.slice(0, 3).map((bestservice, index) => (
                            <div className="projects-bestservice" key={index} >
                                <div className="preview-box box-68">
                                    <Link href={`/categories/services/servicedetail/${bestservice.link}`}>
                                        <Image
                                            src={bestservice.image}
                                            height={68}
                                            width={68}
                                            style={{ minHeight: 68 }}
                                            alt={bestservice.id.toString()}
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
export default Homedatas;
