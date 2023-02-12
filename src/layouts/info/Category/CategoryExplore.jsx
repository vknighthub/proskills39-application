import Image from '@/components/ui/image';
import Link from "next/link";

const CategoryExplore = ({ data }) => {
    return (

        <div className="container section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    Explore <span className="gradient-text">{data.name}</span>
                </div>
            </div>
            <div className="latest-news-box grid-4-columns">
                {data && data.listCategories && data.listCategories.map((explore) => (
                    <div className="news-item" key={explore.id}>
                        <div className="news-thumb">
                            <Image
                                src={explore.image}
                                width={300}
                                height={300}
                                alt="Generic"
                            >
                            </Image>
                        </div>
                        <div className="news-content">
                            <div className="news-meta">
                                <div className="news-tags">
                                    <span className="tag-item">
                                        {explore.name}
                                    </span>
                                </div>
                            </div>
                            {explore.subject.map((subject) => (
                                <div className="news-title h5" key={subject.id}>
                                    <Link href={subject.link}>
                                        {subject.name}
                                    </Link>
                                </div>
                            ))}


                        </div>
                    </div>
                ))}

            </div>  </div>
    );
};
export default CategoryExplore;
