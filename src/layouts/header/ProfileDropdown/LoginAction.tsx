import React, { useEffect, useState } from 'react'
import ButtonHeader from '../ButtonHeader'
import ActionHeader from '../ActionHeader'
import { useTranslation } from 'react-i18next'

type Props = {
    isAuthorized: boolean,
}

const LoginAction = ({ isAuthorized }: Props) => {
    const { t } = useTranslation('common')

    const [render, setRender] = useState(false)

    useEffect(() => {
        setRender(true)
    }, [render])


    return (
        <>
            {!isAuthorized && render &&
                <>
                    <ButtonHeader name={t('text-login')} link="login" />
                    <ActionHeader />
                </>
            }
        </>
    )
}

export default LoginAction