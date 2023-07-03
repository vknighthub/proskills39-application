import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react'
import { useState, useEffect } from 'react';
import Select from 'react-select';
import NotificationsButton from './NotificationsButton';

const SwitchLanguage = ({ isAuthorized }) => {
    const router = useRouter();
    const { asPath, locales, locale } = router;
    const currentSelectedItem = locales
    const [, setSelectedItem] = useState(currentSelectedItem);

    function handleChange(selectedOption) {
        const value = selectedOption.value
        Cookies.set('NEXT_LOCALE', value, { expires: 365 });
        setSelectedItem(value);
        router.push(asPath, undefined, {
            locale: value,
        });
    }
    const languageOptions = [
        { value: 'en', label: 'EN', icon: <Icon icon="emojione:flag-england" /> },
        { value: 'vn', label: 'VN', icon: <Icon icon="emojione:flag-for-vietnam" /> },
        { value: 'jp', label: 'JP', icon: <Icon icon="emojione:flag-for-japan" /> },
        // Thêm các ngôn ngữ khác vào đây
    ];


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '16px',
            with: '64px',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(#121419, #121419) padding-box,linear-gradient(60deg, #00f, #00e8ff) border-box',
            border: '1px solid transparent',
            borderLeft: 0,
            borderRight: 0,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            className: 'body.dark-mode custom-control'
        }),
        option: (provided, state) => ({
            ...provided,
            marginLeft: '5px',
            display: 'flex',
            alignItems: 'center',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            display: 'flex',
            color: '#fff',
            alignItems: 'center',
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '16px'

        }),
        valueContainer: (provided, state) => ({
            ...provided,
            display: 'flex'
        }),
        indicatorSeparator: () => null
    };

    const CustomOption = ({ innerProps, label, data }) => (
        <div {...innerProps} >
            <span style={{ marginLeft: '20px' }}>{data.icon}</span>
            <span style={{ marginLeft: '10px' }}>{label}</span>
        </div>
    );


    const CustomValueLabel = ({ label, icon }) => (
        <>
            <span style={{ marginLeft: '5px' }}>{label}</span>
        </>
    );

    const SingleValue = ({ children, ...props }) => (
        <>
            <Icon icon="material-symbols:language" style={{ marginRight: '6px' }} />
            {children}
        </>
    );


    const defaultOption = languageOptions.find(option => option.value === locale);

    const [render, setRender] = useState(false);
    useEffect(() => {
        setRender(true)
    }, [render])
    return (
        <>
            {render &&
                <>
                    <NotificationsButton isAuthorized={isAuthorized} />
                    <Select
                        id='custom-select'
                        options={languageOptions}
                        isSearchable={false}
                        styles={customStyles}
                        defaultValue={defaultOption}
                        formatValueLabel={CustomValueLabel}
                        components={{
                            Option: CustomOption,
                            SingleValue: SingleValue
                        }}
                        classNamePrefix={'custom-select'}
                        onChange={handleChange}
                    >


                    </Select>
                </>
            }
        </>
    )
}

export default SwitchLanguage