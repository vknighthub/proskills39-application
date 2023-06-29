import Image from "next/image";
import Link from "next/link";
const Categories = ({ data }) => {
    return (
        data.map((categories, index) => (
            <div className="component-popular-categories" key={index}>
                <Link href={`/categories/${categories.slug}`}>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <div className="element">
                                <Image className="img" alt="Element" src={categories.image} width={233} height={114} />
                                <div className="digital-marketing">{categories.name}</div>
                            </div>
                            <p className="text-wrapper">
                                {categories.details}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        ))


    );
};
export default Categories;
