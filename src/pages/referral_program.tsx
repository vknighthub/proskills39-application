import image from '@/assets/images/content/creators/become-creator.png';
import useAuth from '@/components/auth/use-auth';
import routes from '@/config/routes';
import client from '@/data/client';
import { useMe } from '@/data/user';
import Layout from '@/layouts/_layout';
import Seo from '@/pages/_seo';
import { InvitateFriendInput, NextPageWithLayout } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import * as yup from 'yup';

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
    const { me } = useMe()

    const router = useRouter();
    const processInviteFriend = () => {
        if (!isAuthorized) {
            Swal.fire({
                position: 'top',
                title: 'Invite Friend',
                text: 'If you want to invite friend please login first!',
                icon: 'question',
                showCancelButton: true,
            }).then(function (result) {
                if (result.value) {
                    router.push(`/login?callbackUrl=referral_program`)
                }
            })
        }
    }

    const userData = me?.data

    const [render, setRender] = useState(false)
    useEffect(() => {
        setRender(true)
    }, [false])


    const invitefriendValidationSchema = yup.object().shape({
        receivermail: yup.string().required(),
        receivername: yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<InvitateFriendInput>({
        resolver: yupResolver(invitefriendValidationSchema)
    });

    const { mutate: InviteFriend } = useMutation(client.users.invitefriend, {
        onSuccess: (data) => {
            if (data.errorcode === 0) {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    color: 'green',
                    title: 'Invite Friend',
                    text: 'You have just successfully introduced. If the referrer successfully registers you will get 10% referral commission'
                }).then((result) => {
                    if (result) {
                        router.push('/')
                    }
                })
            }

        },
        onError: (errorAsUnknown) => {
            Swal.fire({
                position: 'top',
                icon: 'error',
                color: 'red',
                title: 'Oops...',
                text: `${'Error:' + errorAsUnknown}`,
            })

        }
    });

    const onSubmit: SubmitHandler<InvitateFriendInput> = (data) => {
        InviteFriend(data)
    };

    return (
        <>
            <Seo
                title="ProSkills39 - Invite friend"
                description="Introduce your friends to the easiest way to get things done"
                url={routes.referral_program}
                image_url='https://api.proskills39.com/system/logo/logotest.png'
            />
            <div className="background-content">
                <div className="become-creator-bc-box container-1300 section-padding-medium ">
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
                            {!isAuthorized && render &&
                                <Link className="btn btn-wide btn-dark" href="#" onClick={() => processInviteFriend()}>
                                    Invite Friend
                                </Link>
                            }
                            {
                                isAuthorized && render &&
                                <>
                                    <form className="cryptoki-form"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <div className="form-field">
                                            <input type="text" id="name" placeholder='Name of your friend' {...register('receivername')} />
                                        </div>
                                        <div className="form-field">
                                            <input type="text" id="email" placeholder='Email' {...register('receivermail')} />
                                        </div>
                                        <button type="submit" className="btn btn-normal btn-fullwidth btn-dark">
                                            Send
                                        </button>
                                    </form>
                                </>
                            }
                        </div>
                    </div>

                    {!userData ?
                        <div className="bc-image">
                            <Image src={image} alt="" />
                        </div>
                        :
                        <div
                            className="avatar box-450"
                        >
                            <Image
                                src={userData?.avatar ? userData.avatar : image}
                                alt="avatar"
                                width={100}
                                height={100}
                            />
                        </div>
                    }

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
            </div >
        </>
    )

}
RefferalProgram.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default RefferalProgram