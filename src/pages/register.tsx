import RegisterUserForm from '@/components/auth/register-form'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React, { useState } from 'react'
import image from '@/assets/images/profile-cover-1.jpg'
import { Box, Modal, Typography } from '@mui/material'
import Link from 'next/link'


const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};
const Register: NextPageWithLayout = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="primary-content-area  background-login">

            <div className="extra-small-section">
                <div className="page-title text-center">

                    <h2>
                        <svg className="svg-register" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" y1="0" y2="1">
                                    <stop stopColor="#0061D3" offset="0" />
                                    <stop stopColor="#04CDF9" offset="1" />
                                </linearGradient>
                            </defs>
                            <g>
                                <text id="text" y="100" font-style="normal" letterSpacing="0.15rem" font-weight="700" stroke-width="2" stroke="url(#gradient)" fill="none">
                                    Register Account
                                </text>
                            </g>
                        </svg>
                    </h2>
                </div>
                <RegisterUserForm username={undefined} />
                <div className="register-notice">
                    You’ll receive a confirmation email in your inbox with a link to
                    activate your account.
                </div>
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Image src={image} alt='popup' />
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ margin: 5, color: "#000" }}>
                        THƯỞNG 50,000,000 cho 1,000 FREELANCER ĐẦU TIÊN chỉ cần đăng 1 dịch vụ freelancer kiếm việc, nhận ngay 50,000 VNĐ.
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ margin: 5, color: "#000" }}>
                        Hướng dẫn chi tiết 3 bước:
                    </Typography>
                    <Box sx={{ margin: 5, color: "#000" }}>
                        <ul>
                            <li>Bước 1 - Đăng ký tài khoản ở đây</li>
                            <li style={{ color: "blue" }}>
                                <Link href="https://www.canva.com/design/DAFsgDYFNqM/qmqEW7s2Jp56aIrqEv0GQA/edit" color='blue' >
                                    Bước 2 - Đăng 1 dịch vụ kiếm việc freelancer
                                </Link>
                            </li>
                            <li style={{ color: "blue" }}>
                                <Link href=" https://docs.google.com/forms/d/e/1FAIpQLScZ-DbZybbDktsWK49NAx4yWQH9zaNOX55ocb1ljZJlIyB-4Q/viewform?pli=1" color='blue' >
                                    Bước 3 - Điền thông tin và nhận thưởng:
                                </Link>
                            </li>
                        </ul>
                    </Box>
                    <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ margin: 5, color: "#FFC0CB" }}>
                        ĐĂNG KÝ NGAY
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
Register.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    try {
        return {
            props: {
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


export default Register;
