import ChatContent from '@/layouts/info/Chat/ChatContent';
import ChatSidebarLeft from '@/layouts/info/Chat/ChatSidebarLeft';
import Layout from '@/layouts/_layout';
import { NextPageWithLayout, StatusObjType } from '@/types';
import { StatusType } from '@/types/chatTypes';
import { Box, useMediaQuery } from '@mui/material';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react'
import invariant from 'tiny-invariant';
import { useTheme } from '@mui/material/styles'
import { getInitials } from '@/utils/get-initials';
import { formatDateToMonthShort } from '@/utils/format';





const InboxPage: NextPageWithLayout<
    InferGetStaticPropsType<typeof getStaticProps>
> = ({ seller }) => {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false)
    const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)
    const theme = useTheme()
    const hidden = useMediaQuery(theme.breakpoints.down('lg'))
    const mdAbove = useMediaQuery(theme.breakpoints.up('md'))
    const statusObj: StatusObjType = {
        busy: 'error',
        away: 'warning',
        online: 'success',
        offline: 'secondary'
    }
    const [userStatus, setUserStatus] = useState<StatusType>('online')
    const smAbove = useMediaQuery(theme.breakpoints.up('sm'))
    const sidebarWidth = smAbove ? 370 : 300
    const [userProfileLeftOpen, setUserProfileLeftOpen] = useState<boolean>(false)
    const [userProfileRightOpen, setUserProfileRightOpen] = useState<boolean>(false)
    const handleUserProfileLeftSidebarToggle = () => setUserProfileLeftOpen(!userProfileLeftOpen)

    return (
        <div className="primary-content-area background-content">
            <div className="container section-padding">
                <div className="section-title-wrapper">
                    <div className="section-title">
                        Contact to <span className="gradient-text">  {seller}</span>
                    </div>
                </div>
                <div className="featured-box">
                    <Box
                        className='app-chat'
                        sx={{
                            width: '100%',
                            display: 'flex',
                            borderRadius: 1,
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: 6,
                            border: `1px solid #fff`
                        }}
                    >
                        <ChatSidebarLeft
                            hidden={hidden}
                            mdAbove={mdAbove}
                            statusObj={statusObj}
                            userStatus={userStatus}
                            getInitials={getInitials}
                            sidebarWidth={sidebarWidth}
                            setUserStatus={setUserStatus}
                            leftSidebarOpen={leftSidebarOpen}
                            userProfileLeftOpen={userProfileLeftOpen}
                            formatDateToMonthShort={formatDateToMonthShort}
                            handleLeftSidebarToggle={handleLeftSidebarToggle}
                            handleUserProfileLeftSidebarToggle={handleUserProfileLeftSidebarToggle} store={{
                                chats: null,
                                contacts: null,
                                userProfile: null,
                                selectedChat: null
                            }} removeSelectedChat={function (): void {
                                throw new Error('Function not implemented.');
                            } } selectChat={function (id: number): void {
                                throw new Error('Function not implemented.');
                            } } />
                        <ChatContent />
                    </Box>
                </div>
            </div>

        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
    invariant(locales, 'locales is not defined')
    return {
        paths: [],
        fallback: 'blocking',
    }
}
export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
    const { slug } = params! //* we know it's required because of getStaticPaths

    try {
        return {
            props: {
                seller: slug,
                ...(await serverSideTranslations(locale!, ['common', 'footer'])),
            },
            revalidate: 60, // In seconds
        };
    } catch (error) {
        console.log(error)
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true,
        };
    }
};

InboxPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export default InboxPage