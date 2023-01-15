import { CartIcon } from "@/components/icons/cart-icon";
import { ProgramingIcon } from "@/components/icons/categories/programing-icon";
import Image from "next/image";
import Link from "next/link";

const Categories = ({ data }) => {
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
                                <ProgramingIcon style={{ width: "80px", height: "80px" }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        ))


    );
};
export default Categories;
