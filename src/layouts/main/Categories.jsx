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
import Image from "next/image";
import Link from "next/link";
import element_15 from '@/assets/images/service/element-15.png';
import element_13 from '@/assets/images/service/element-13.png';
import element_14 from '@/assets/images/service/element-14.png';
import element_17 from '@/assets/images/service/element-17.png';
import element_12 from '@/assets/images/service/element-12.png';
import element_19 from '@/assets/images/service/element-19.png';
import element_18 from '@/assets/images/service/element-18.png';
import element_22 from '@/assets/images/service/element-22.png';
import element_21 from '@/assets/images/service/element-21.png';
import element_12_2 from '@/assets/images/service/element-12-2.png';



const Categories = ({ data }) => {

    const renderIcon = (icon) => {
        switch (icon) {
            case "program-tech": return element_15;
            case "graphics-design": return element_13;
            case "digital-marketing": return element_14;
            case "writting-translation": return element_17;
            case "video-animation": return element_12;
            case "music-audio": return element_19;
            case "business": return element_18;
            case "lifestyle": return element_22;
            case "trending": return element_21;
            case "aiservices": return element_12_2;
            default: return null;
        }
    }
    console.log(data)
    return (
        data.map((categories, index) => (
            <div className="component-popular-categories" key={index}>
                <div className="overlap-group-wrapper">
                    <div className="overlap-group">
                        <div className="element">
                            <Image className="img" alt="Element" src={renderIcon(categories.icon)} />
                            <div className="digital-marketing">{categories.name}</div>
                        </div>
                        <p className="text-wrapper">
                            {categories.details}
                        </p>
                    </div>
                </div>
            </div>
        ))


    );
};
export default Categories;
