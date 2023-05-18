import { FetchFetchServiceCatalogBySlug } from '@/data/categories';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import categories from "./../../data/categories/categories.json";

const SearchBox = () => {
  const [activeToggle, setActiveToggle] = useState(false);
  const [active, setActive] = useState("Program & Tech");
  const [value, setValue] = useState("programming-and-tech")
  const { t } = useTranslation('common');
  const { locale } = useRouter()
  const [filter, setFilter] = useState([])

  const { data, refetch } = FetchFetchServiceCatalogBySlug({
    slug: value,
    language: locale
  })

  useEffect(() => {
    refetch()
  }, [value, locale])

  return (
    <>
      <div className="searchbox">
        <form
          method="get"
          className="main-search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="main-search-params"
            type="hidden"
            name="params"
            defaultValue="all"
          />
          <button
            className={`search-params ${activeToggle ? "active" : ""}`}
            onClick={() => setActiveToggle(!activeToggle)}
          >
            <span className="search-param-title">{active}</span>{" "}
            <svg className="crumina-icon">
              <use xlinkHref="#arrow-down-icon" />
            </svg>
          </button>
          <ul className="search-dropdown">
            {categories.map((category, index) => (
              <li key={index}
                data-param={category.name}
                onClick={() => {
                  setActiveToggle(false);
                  setActive(category.name);
                  setValue(category.slug)
                }}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="search-input"
            name="head-search"
            id="head-search"
            placeholder={t('text-search-word')}
          />
          <button className="search-button">
            <svg className="crumina-icon">
              <use xlinkHref="#search-icon" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};
export default SearchBox;
