import routes from '@/config/routes'
import Layout from '@/layouts/_layout'
import Seo from '@/layouts/_seo'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React from 'react'
import attendance from '@/assets/images/gif/attendance.gif'
import Link from 'next/link'
import { useAttendance, useMe } from '@/data/user'
type Props = {}

const AttendancePage: NextPageWithLayout = (props: Props) => {

    const { me } = useMe()

    const { mutate: handleProcessAttendance } = useAttendance()


    return (
        <>
            <Seo
                title="ProSkills39 - Pro Skills For Your Success"
                description="Nền tảng kết nối nhà cung cấp dịch vụ, chuyên gia với những người có nhu cầu sử dụng dịch vụ, kỹ năng đó."
                url={routes.attendance}
                image_url='https://api.proskills39.com/system/logo/ProSkills39_Color.svg'
            />
            <div className="primary-content-area background-content">
                <div className="single-post medium-section mt-6">
                    <div className="post-heading">
                        <div className="news-meta">
                            <svg style={{ width: 387, height: 137, textAlign: 'center' }} xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient" y1="0" y2="1">
                                        <stop stopColor="#0061D3" offset="0" />
                                        <stop stopColor="#04CDF9" offset="1" />
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="100"
                                        fontSize="60"
                                        fontStyle="normal"
                                        letterSpacing="0.15rem"
                                        fontWeight="700"
                                        strokeWidth="2" stroke="url(#gradient)" fill="none">
                                        Attendance
                                    </text>
                                </g>
                            </svg>
                        </div>

                        <p style={{
                            fontWeight: 400,
                            fontSize: 24
                        }}>
                            {me?.data.isAttendance ? " You have attendance today. Please come back at tomorrow" : "You still don&lsquo;t have attendance today?"}
                        </p>


                        <Image
                            src={attendance}
                            alt="attendance"
                        />
                        {!me?.data.isAttendance &&
                            <div>
                                <Link
                                    className="btn btn-normal btn-dark create-collection center"
                                    href="#"
                                    onClick={() => handleProcessAttendance()}
                                >
                                    Attendance
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common', 'footer'])),
        },
        revalidate: 60, // In seconds
    };
};


AttendancePage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
export default AttendancePage