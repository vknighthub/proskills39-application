import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import image from '@/assets/images/content/creators/become-creator.png'
import Image from 'next/image';
import useAuth from '@/components/auth/use-auth';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};

const RefferalProgram: NextPageWithLayout = () => {
    const { isAuthorized } = useAuth()
    const router = useRouter();
    const processInviteFriend = () => {
        if (isAuthorized) {

        } else {
            Swal.fire({
                position: 'top',
                title: 'Invite Friend',
                text: 'If you want to invite friend please login first!',
                icon: 'question'
            }).then((response) => {
                if (response) {
                    router.push('/login')
                }
            })
        }
    }

    return (
        <div>
            <div className="become-creator-bc-box container-1300 section-padding-medium">
                <div className="bc-info">
                    <div className="bc-heading">
                        <div className="bc-heading-subtitle">INVITE FRIEND!</div>
                        <div className="bc-heading-title">
                            <span className="gradient-text">You Both Get Up Sale 10%</span>
                        </div>
                    </div>
                    <div className="bc-description">
                        Introduce your friends to the easiest way to get things done
                    </div>
                    <div className="bc-button">
                        <Link className="btn btn-wide btn-dark" href="#application-form" onClick={() => processInviteFriend()}>
                            Invite Friend
                        </Link>
                    </div>
                </div>
                <div className="bc-image">
                    <Image src={image} alt="" />
                </div>
            </div>
            <div className="container-1300 section-padding-medium">
                <div className="info-box">
                    <div className="info-item">
                        <div className="title h6">Social Sharing</div>
                        <div className="item-description">
                            Spread the word by email or with your link via social sharing
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="title h6">Sale Off</div>
                        <div className="item-description">
                            Your friend signs up to Proskills39 & gets 10% off their first purchase
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="title h6">First Order</div>
                        <div className="item-description">
                            You get 10% of their first order amount, up to $100
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
RefferalProgram.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default RefferalProgram