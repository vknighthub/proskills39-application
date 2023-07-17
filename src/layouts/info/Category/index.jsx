
import Seo from '@/pages/_seo';
import CategoryPopular from "./CategoryPopular";
import CategoryExplore from "./CategoryExplore";
import CategoryFAQs from "./CategoryFAQs";

const Category = ({ category }) => {
    return (
        <>
            <Seo
                title={`ProSkills39 - ${category.name}`}
                description={category.description}
                url={`categories/${category.url}`}
                image_url={category.image}
            />
            <div className="background-content">
            <CategoryPopular data={category} />
            <CategoryExplore data={category} />
            <CategoryFAQs data={category} />
            </div>
        </>
    )
}
export default Category;