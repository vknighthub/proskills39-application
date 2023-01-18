import { DigitalMarketingIcon } from "@/components/icons/categories/degital-marketing";
import { GraphicsDesignIcon } from "@/components/icons/categories/graphic-design-icon";
import { ProgramingIcon } from "@/components/icons/categories/programing-icon";
import Link from "next/link";

const Categories = ({ data }) => {
    const renderIcon = (icon) => {
        switch (icon ) {
            case "program-tech": return  <ProgramingIcon style={{ width: "80px", height: "80px" }} />
            case "graphics-design" : return <GraphicsDesignIcon style={{ width: "80px", height: "80"}}/>
            case "digital-marketing" : return <DigitalMarketingIcon style={{ width: "80px", height: "80"}}/>
            default: return null;
        }
    } 
    return (
        data.map((categories, index) => (
            <div className="featured-item" key={index}>
                <div className="featured-item-wrapper">
                    <div className="featured-item-content">
                        <div className="fav-counter">
                            <svg className="crumina-icon">
                                <use xlinkHref="#heart-icon" />
                            </svg>{" "}
                            <span className="count">{categories.react}</span>
                        </div>
                        <div className="featured-item-image">
                            {" "}
                            <Link href="/05-product-page">

                            </Link>{" "}
                        </div>
                        <div className="featured-item-info">
                            <div className="title">
                                {" "}
                                <Link href="/05-product-page">
                                    {categories.name}
                                </Link>{" "}
                            </div>
                            <div className="item-meta">
                                {renderIcon(categories.icon)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        ))


    );
};
export default Categories;
