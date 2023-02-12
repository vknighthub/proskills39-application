
import Seo from '@/layouts/_seo';
import CategoryPopular from "./CategoryPopular";
import CategoryExplore from "./CategoryExplore";
import CategoryFAQs from "./CategoryFAQs";

const Category = ({ data }) => {
    const category = data.result.data
    return (
        <>
            <Seo
                title={`ProSkills39 - ${category.name}`}
                description={category.description}
                url={`categories/${category.url}`}
                image_url={category.image}
            />
            <CategoryPopular data={category} />
            <CategoryExplore data={category} />
            <CategoryFAQs data={category} />



        </>
    )
}
export default Category;