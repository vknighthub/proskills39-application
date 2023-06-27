import Image from '@/components/ui/image';
import routes from '@/config/routes';
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
                                    <stop stop-color="#0061D3" offset="0" />
                                    <stop stop-color="#04CDF9" offset="1" />
                                </linearGradient>
                            </defs>
                            <g>
                                <text id="text" y="100" font-size="60" font-style="normal" letterSpacing="0.15rem" font-weight="700" stroke-width="2" stroke="url(#gradient)" fill="none">
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
                        <Image className="vector" alt="Vector" src={explore.image} width={337} height={310}/>
                        {explore.subject.map((subject,index) => (
                            <Link className={`item-${index}`} href={subject.slug} rel="noopener noreferrer" target="_blank" key={subject.id}>
                                {subject.name}
                            </Link>
                        ))}
                    </div>
                ))}

            </div>  </div>
    );
};
export default CategoryExplore;
