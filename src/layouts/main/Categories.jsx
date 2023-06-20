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
import { StarIcon } from "@/components/icons/star-icon";
import Link from "next/link";

const Categories = ({ data }) => {
    
    const renderIcon = (icon) => {
        switch (icon) {
            case "program-tech": return <ProgramingIcon style={{ width: "233px", height: "144px" }} />;
            case "graphics-design": return <GraphicsDesignIcon style={{ width: "233px", height: "144px" }} />;
            case "digital-marketing": return <DigitalMarketingIcon style={{ width: "233px", height: "144px" }} />;
            case "writting-translation": return <WrittingTranslationIcon style={{ width: "233px", height: "144px" }} />;
            case "video-animation": return <VideoAnimationIcon style={{ width: "233px", height: "144px" }} />;
            case "music-audio": return <MusicAudioIcon style={{ width: "233px", height: "144px" }} />;
            case "business": return <BusinessIcon style={{ width: "233px", height: "144px" }} />;
            case "lifestyle": return <LifeStyleIcon style={{ width: "233px", height: "144px" }} />;
            case "trending" : return <TrendingIcon style={{ width: "233px", height: "144px" }} />;
            case "aiservices" : return <AIServiceIcon style={{ width: "233px", height: "144px" }} />;
            default: return null;
        }
    }
    return (
        data.map((categories, index) => (
            <div className="featured-item" key={index}>
                <Link href={`/categories/${categories.slug}`}>
                    <div className="featured-item-wrapper">
                        <div className="featured-item-content">
                            <div className="featured-item-image">
                                {renderIcon(categories.icon)}
                            </div>
                            <div className="featured-item-info">
                                <StarIcon />
                                <div className="title">
                                    {categories.name}
                                </div>
                                <div className="item-meta">
                                    
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
