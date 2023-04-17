import { AIServiceIcon } from "@/components/icons/categories/aiservice";
import { BusinessIcon } from "@/components/icons/categories/business";
import { DigitalMarketingIcon } from "@/components/icons/categories/degital-marketing";
import { GraphicsDesignIcon } from "@/components/icons/categories/graphic-design-icon";
import { LifeStyleIcon } from "@/components/icons/categories/lifestyle";
import { MusicAudioIcon } from "@/components/icons/categories/music-audio";
import { ProgramingIcon } from "@/components/icons/categories/programing-icon";
import { TrendingIcon } from "@/components/icons/categories/trending";
import { VideoAnimationIcon } from "@/components/icons/categories/video-animation";
import { WrittingTranslationIcon } from "@/components/icons/categories/writting-translation";
import Link from "next/link";

const Categories = ({ data }) => {
    
    const renderIcon = (icon) => {
        switch (icon) {
            case "program-tech": return <ProgramingIcon style={{ width: "80px", height: "80px" }} />
            case "graphics-design": return <GraphicsDesignIcon style={{ width: "80px", height: "80" }} />
            case "digital-marketing": return <DigitalMarketingIcon style={{ width: "80px", height: "80" }} />
            case "writting-translation": return <WrittingTranslationIcon style={{ width: "80px", height: "80" }} />
            case "video-animation": return <VideoAnimationIcon style={{ width: "80px", height: "80" }} />
            case "music-audio": return <MusicAudioIcon style={{ width: "80px", height: "80" }} />
            case "business": return <BusinessIcon style={{ width: "80px", height: "80" }} />
            case "lifestyle": return <LifeStyleIcon style={{ width: "80px", height: "80" }} />
            case "trending" : return <TrendingIcon style={{ width: "80px", height: "80"}} />
            case "aiservices" : return <AIServiceIcon style={{ width: "80px", height: "80" }} />
            default: return null;
        }
    }
    return (
        data.map((categories, index) => (
            <div className="featured-item" key={index}>
                <Link href={`/categories/${categories.slug}`}>
                    <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                            <div className="fav-counter">
                                <svg className="crumina-icon">
                                    <use xlinkHref="#heart-icon" />
                                </svg>{" "}
                                <span className="count">{categories.react}</span>
                            </div>
                            <div className="featured-item-image">

                            </div>
                            <div className="featured-item-info">
                                <div className="title">
                                    {categories.name}
                                </div>
                                <div className="item-meta">
                                    {renderIcon(categories.icon)}
                                </div>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        ))


    );
};
export default Categories;
