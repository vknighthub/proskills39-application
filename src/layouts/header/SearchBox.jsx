import { FetchFetchServiceCatalogBySlug } from '@/data/categories';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import categories from "./../../data/categories/categories.json";
import { ReactSearchAutocomplete } from "react-search-autocomplete"

const SearchBox = () => {
  const [activeToggle, setActiveToggle] = useState(false);
  const [active, setActive] = useState("Program & Tech");
  const [value, setValue] = useState("programming-and-tech")
  const { t } = useTranslation('common');
  const { locale } = useRouter()
  const [filter, setFilter] = useState([])
  const router = useRouter()

  const { data, refetch } = FetchFetchServiceCatalogBySlug({
    slug: value,
    language: locale
  })

  useEffect(() => {
    refetch()
  }, [value, locale])


  const [searchTerm, setSearchTerm] = useState(data?.listcatechild);

  const handleOnSearch = (string, results) => {
    if (string === '') {
      setSearchTerm(data.listcatechild)
    } else {
      setSearchTerm(results)
    }
  };


  const [selectedValue, setSelectedValue] = useState('');

  const handleOnSelect = (item) => {
    setSelectedValue(item.slug); // Lấy giá trị của thuộc tính "title" hoặc thuộc tính phù hợp khác
  };


  const handleRedirectToSearch = () => {
    router.push(`/categories/services/searching/${selectedValue}`)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      const parent = document.getElementById('seach-click-box');
      if (parent && !parent.contains(event.target)) {
        setActiveToggle(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="searchbox" id="seach-click-box">
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

          <div style={{ width: '250px' }}>
            <ReactSearchAutocomplete
              items={data?.listcatechild}
              onSearch={handleOnSearch}
              styling={{ zIndex: 15 }} // To display it on top of the search box below
              autoFocus
              fuseOptions={{ keys: ["name"] }}
              resultStringKeyName="name"
              showIcon={false}
              onSelect={handleOnSelect}
            />
          </div>
          <button className="search-button" onClick={() => handleRedirectToSearch()}>
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
