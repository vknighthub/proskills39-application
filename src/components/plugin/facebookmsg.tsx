'use-client'

import { useRouter } from 'next/router'
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook'

const FacebookMsg = () => {
    const { locale } = useRouter()
    return (
        <FacebookProvider
            appId='670951515077559'
            chatSupport
            language={locale}
            lazy={true}
        >
            <CustomChat
                pageId='100345429819665'
                minimized={true}

            />
        </FacebookProvider>
    )
}

export default FacebookMsg