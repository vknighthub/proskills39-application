'use-client'

import { useRouter } from 'next/router'
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook'

const FacebookMsg = () => {
    const { locale } = useRouter()
    return (
        <FacebookProvider
            appId='840461017733225'
            chatSupport
            language={locale}
            lazy={true}
        >
            <CustomChat
                pageId='105654225560640'
                minimized={true}
            />
        </FacebookProvider>
    )       
}

export default FacebookMsg