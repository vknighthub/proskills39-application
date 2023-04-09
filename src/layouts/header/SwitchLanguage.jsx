import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';

const SwitchLanguage = () => {
    const router = useRouter();
    const { asPath, locales } = router;
    const currentSelectedItem = locales
    const [, setSelectedItem] = useState(currentSelectedItem);

    function handleItemClick(values) {
        Cookies.set('NEXT_LOCALE', values, { expires: 365 });
        setSelectedItem(values);
        router.push(asPath, undefined, {
            locale: values,
        });
    }
    return (
        <>
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
        </>
    )
}

export default SwitchLanguage