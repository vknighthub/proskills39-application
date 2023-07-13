import Image from '@/components/ui/image';
import Link from "next/link";

const CategoryExplore = ({ data }) => {
    return (

        <div className="container section-padding overflow-hidden">
            <div className="section-title-wrapper">
                <div className="section-title">
                    <h2>
                        <svg style={{ width: 1280, height: 137, textAlign: 'center' }} xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" y1="0" y2="1">
                                    <stop stopColor="#0061D3" offset="0" />
                                    <stop stopColor="#04CDF9" offset="1" />
                                </linearGradient>
                            </defs>
                            <g>
                                <text id="text" y="100"
                                    fontSize="50"
                                    fontStyle="normal"
                                    letterSpacing="0.15rem"
                                    fontWeight="800"
                                    strokeWidth="1.5"
                                    stroke="url(#gradient)"
                                    fill="none"
                                    fontFamily='Quicksand'
                                    style={{ fontFamily: 'sans-serif' }}
                                >
                                    Explore {data.name}
                                </text>
                            </g>
                        </svg>
                    </h2>
                </div>
            </div>
            <div className="latest-news-box grid-4-columns">
                {data && data.listCategories && data.listCategories.map((explore) => (
                    <div className="component-categories-explore" key={explore.id}>
                        <Image className="vector" alt="Vector" src={explore.image} width={337} height={310} />
                        {explore.subject.map((subject, index) => (
                            <Link
                                className={`item-${index + 1}`}
                                href={`/categories/services/${subject.slug}`}
                                rel="noopener noreferrer" target="_blank"
                                key={subject.id}>
                                {subject.name}
                            </Link>
                        ))}
                    </div>
                ))}

            </div>  </div>
    );
};
export default CategoryExplore;
