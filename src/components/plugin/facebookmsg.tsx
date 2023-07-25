'use-client'

import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook'

const FacebookMsg = () => {
    return (
        <FacebookProvider appId='670951515077559' chatSupport>
            <CustomChat
                pageId='100345429819665'
                minimized={false}
            />
        </FacebookProvider>
    )
}

export default FacebookMsg