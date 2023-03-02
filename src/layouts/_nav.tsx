import index from './../data/categories/index.json';
import { NavFourColumnHeaderRight } from './nav/NavFourColumnHeaderRight';
import { NavThreeColumn } from './nav/NavThreeColumn';
import { NavThreeColumnHeaderLeft } from './nav/NavThreeColumnHeaderLeft';
import { NavThreeColumnHeaderRight } from './nav/NavThreeColumnHeaderRight';
import { NavTwoColumn } from './nav/NavTwoColumn';
import { NavTwoColumnHeaderLeft } from './nav/NavTwoColumnHeaderLeft';
import { NavTwoColumnHeaderRight } from './nav/NavTwoColumnHeaderRight';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';

const NavLayout = () => {
    const router = useRouter();
    const { asPath, locales, locale } = router;
    const currentSelectedItem = locales
    const [, setSelectedItem] = useState(currentSelectedItem);

    const renderNav = (categories: { id: string; menutype: string; name: { en: string; vn: string; jp: string; }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; slice_number: number; children: { id: string; name: { en: string; vn: string; jp: string; }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: ({ id: string; name: { en: string; vn: string; jp: string; }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[]; menutype?: undefined; } | { id: string; menutype: string; name: { en: string; vn: string; jp: string; }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[]; })[]; }[]; } | { id: string; menutype: string; name: { en: string; vn: string; jp: string; }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; slice_number: number; children: ({ id: string; name: { en: string; vn: string; jp: string; }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[]; menutype?: undefined; slice_number?: undefined; } | { id: string; menutype: string; name: { en: string; vn: string; jp: string; }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; slice_number: number; children: never[]; })[]; }) => {
        switch (categories.menutype) {
            case 'four-column-header-right': return <NavFourColumnHeaderRight category={categories} />;
            case 'three-column-header-right': return <NavThreeColumnHeaderRight category={categories} />;
            case 'three-column-header': return <NavThreeColumn data={categories.children} slice={categories.slice_number} />;
            case 'three-column-header-left': return <NavThreeColumnHeaderLeft category={categories} />;
            case 'two-column-header-right': return <NavTwoColumnHeaderRight category={categories} />;
            case 'two-column-header-left': return <NavTwoColumnHeaderLeft category={categories} />;

            default: return <NavTwoColumn data={categories.children} slice={categories.slice_number} />;
        }
    }
    function handleItemClick(values: any) {

        Cookies.set('NEXT_LOCALE', values, { expires: 365 });
        setSelectedItem(values);
        router.push(asPath, undefined, {
            locale: values,
        });
    }

    return (
        <nav className="border-bottom sticky-header">
            <div className="navigation-wrapper container flex-space-between align-items-center">
                <ul className="navigation-menu">
                    {index.map((category, index) => (
                        <li
                            className="menu-item menu-item-has-megamenu menu-item-has-children"
                            key={index}
                        >
                            <a className="menu-link" href={category.url}>
                                {category.name.en}
                                <span className="indicator">
                                    <svg className="crumina-icon">
                                        <use xlinkHref="#arrow-down-icon" />
                                    </svg>
                                </span>
                            </a>
                            {renderNav(category)}
                        </li>
                    ))}
                </ul>

                <ul className="social-icons-list">
                    <li className="social-icon">
                        {' '}
                        <a onClick={() => handleItemClick('en')}>
                            <svg style={{ width: '23px', height: '23px' }}>
                                <use xlinkHref="#united-kingdom-flag" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a onClick={() => handleItemClick('vn')} >
                            <svg style={{ width: '23px', height: '23px' }}>
                                <use xlinkHref="#vietnam-flag" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a onClick={() => handleItemClick('jp')}>
                            <svg style={{ width: '23px', height: '23px' }}>
                                <use xlinkHref="#japan-flag" />
                            </svg>
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
export default NavLayout
