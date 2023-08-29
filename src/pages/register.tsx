import RegisterUserForm from '@/components/auth/register-form'
import Layout from '@/layouts/_layout'
import { NextPageWithLayout } from '@/types'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import React, { useState } from 'react'
import image from '@/assets/images/profile-cover-1.png'
import { Box, Modal, Typography } from '@mui/material'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { Icon } from '@iconify/react'


const style = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    height: 700
};
const styleMB = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24
};
const Register: NextPageWithLayout = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
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
                <Box sx={isTabletOrMobile ? styleMB : style}>
                    {isTabletOrMobile ?
                        <Image src={image} alt='popup' width={350} style={{ maxWidth: 350 }} />
                        :
                        <Image src={image} alt='popup' width={1345} height={1345} />
                    }

                    <Box sx={{ textAlign: "center", color: "#000", background: "#fff" }}>
                        <Icon icon="icon-park:hand-right" style={{ width: 60, height: 60 }} />
                        <Link id="modal-modal-title" href="#"
                            onClick={handleClose}
                            style={{textDecorationLine:'underline' , color: "blue", margin: 20, fontSize: `${isTabletOrMobile ? "25px" : "40px"}` }}>
                            ĐĂNG KÝ NGAY
                        </Link>
                        <Icon icon="icon-park:hand-left" style={{ width: 60, height: 60 }} />
                    </Box>

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
