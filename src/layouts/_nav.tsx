import index from './../data/categories/index.json';
import { NavFourColumnHeaderRight } from './nav/NavFourColumnHeaderRight';
import { NavThreeColumn } from './nav/NavThreeColumn';
import { NavThreeColumnHeaderLeft } from './nav/NavThreeColumnHeaderLeft';
import { NavThreeColumnHeaderRight } from './nav/NavThreeColumnHeaderRight';
import { NavTwoColumn } from './nav/NavTwoColumn';
import { NavTwoColumnHeaderLeft } from './nav/NavTwoColumnHeaderLeft';
import { NavTwoColumnHeaderRight } from './nav/NavTwoColumnHeaderRight';

const NavLayout = () => {

    const renderNav = (category: { id: string; menutype: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; slice_number: number; children: { id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: ({ id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[]; menutype?: undefined } | { id: string; menutype: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[] })[] }[] } | { id: string; menutype: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; slice_number: number; children: ({ id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[]; menutype?: undefined; slice_number?: undefined } | { id: string; menutype: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; slice_number: number; children: never[] })[] } | { id: string; menutype: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: { id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: { id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[] }[] }[]; slice_number?: undefined } | { id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: { id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: { id: string; name: { en: string; vn: string; jp: string }; slug: string; language: string; icon: string; image: string; details: string; type_id: string; created_at: string; updated_at: string; deleted_at: null; translated_languages: string; type: string; parent_id: string; url: string; menu_level: number; children: never[] }[] }[]; menutype?: undefined; slice_number?: undefined }) => {
        switch (category.menutype) {
            case 'four-column-header-right': return <NavFourColumnHeaderRight category={category} />;
            case 'three-column-header-right': return <NavThreeColumnHeaderRight category={category} />;
            case 'three-column-header': return <NavThreeColumn data={category.children} slice={category.slice_number} />;
            case 'three-column-header-left': return <NavThreeColumnHeaderLeft category={category} />;
            case 'two-column-header-right': return <NavTwoColumnHeaderRight category={category} />;
            case 'two-column-header-left': return <NavTwoColumnHeaderLeft category={category} />;

            default: return <NavTwoColumn data={category.children} slice={category.slice_number} />;
        }
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
                            <a className="menu-link" href="#">
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
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#facebook-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitter-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#instagram-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#twitch-icon" />
                            </svg>
                        </a>
                    </li>
                    <li className="social-icon">
                        {' '}
                        <a href="#">
                            <svg className="crumina-icon">
                                <use xlinkHref="#discord-icon" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavLayout
