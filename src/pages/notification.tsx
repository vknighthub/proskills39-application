import client from '@/data/client';
import { useMe } from '@/data/user';
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import NotificationsLists from '@/layouts/info/NotificationsLists'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const Notification: NextPageWithLayout = () => {
    const { locale } = useRouter()
    const { isAuthorized } = useMe()
    const [render, setRender] = useState(false);


    const { data, refetch } = useQuery({
        queryKey: ['notification'],
        queryFn: () => client.notification.get(
            {
                language: locale
            }
        )
    })

    const listnotification = data?.result.data

    useEffect(() => {
        refetch()
        setRender(true)
    }, [locale, isAuthorized, render])

    return (
        <>
            {isAuthorized && render &&
                <div className="primary-content-area container grid-aside-main-4-col content-padding">
                    <div className="main-content-area">
                        <div className="page-title">
                            <h2>
                                <span className="gradient-text">Notifications</span>
                            </h2>
                        </div>
                        {listnotification && <NotificationsLists notification={listnotification?.data} />}
                    </div>
                </div>
            }
        </>
    )
}
Notification.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default Notification