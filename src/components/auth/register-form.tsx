import client from '@/data/client';
import { AuthResponse, NextPageWithLayout, RegisterUserInput } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import * as yup from 'yup';




const registerValidationSchema = yup.object().shape({
    username: yup.string().required(),
    fullname: yup.string().required(),
    gender: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().required(),
    birthday: yup.date().required(),
    phone: yup.string().required()
});

const RegisterUserForm: NextPageWithLayout = () => {

    const { t } = useTranslation('common');
    const router = useRouter()




    const { mutate: registerform, isSuccess } = useMutation(client.users.register, {
        onSuccess: (data) => {
            if (!data.result.data) {
                toast.error(<b>{t('text-join-now')}</b>, {
                    className: '-mt-10 xs:mt-0',
                });
                return;
            }

        },
        onError: (errorAsUnknown) => {
            const error = errorAsUnknown as AxiosError<AuthResponse>;
            Swal.fire({
                position: 'center',
                icon: 'error',
                color: 'red',
                title: 'Oops...',
                text: `${error?.response?.status === 400 ? error?.response?.data.messagedetail : 'Error'}`,
            })

        }
    });

    if (isSuccess) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            color: 'green',
            text: `You have successfully registered an account. Your account will be emailed and approved within 3 working days`,
        }).then(response => {
            if (response.value) {
                router.push('/login')
            }
        })
    }

    const onSubmit: SubmitHandler<RegisterUserInput> = (data) => {
        registerform(data)
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterUserInput>({
        resolver: yupResolver(registerValidationSchema)
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)}
            id="sign-up"
            className="tk-lp-form user-register-kit-register tk-lp-tabs-form-content active"
            data-handler="lrk_register_action"
        >
            <input type="hidden" name="redirect_to" defaultValue="" />
            <input type="hidden" name="after_login" defaultValue="auto_login" />
            <div className="tk-lp-alert-cont" />
            <div className="tk-lp-form-item">
                <label htmlFor="sign_up_username" className="tk-lp-label">
                    Username
                </label>
                <input
                    className="tk-lp-input"
                    id="sign_up_username"
                    type="text"
                    {...register('username')}
                />
            </div>
            <div className="tk-lp-form-item">
                <label htmlFor="sign_up_fullname" className="tk-lp-label">
                    Fullname
                </label>
                <input
                    className="tk-lp-input"
                    id="sign_up_fullname"
                    type="text"
                    {...register('fullname')}
                />
            </div>
            <div className="tk-lp-form-item">
                <label htmlFor="sign_up_address" className="tk-lp-label">
                    Address
                </label>
                <input
                    className="tk-lp-input"
                    id="sign_up_address"
                    type="text"
                    {...register('address')}
                />
            </div>
            <div className="tk-lp-form-item">
                <label htmlFor="sign_up_email-address" className="tk-lp-label">
                    Email Address
                </label>
                <input
                    className="tk-lp-input"
                    id="sign_up_email-address"
                    type="text"
                    {...register('email')}
                />
            </div>
            <div className="tk-lp-form-item">
                <label htmlFor="sign_up_birthday" className="tk-lp-label">
                    Birthday
                </label>
                <input
                    className="tk-lp-input"
                    id="sign_up_birthday"
                    type="date"
                    {...register('birthday')}
                />
            </div>
            <div />
            <div className="tk-lp-form-item">
                <label htmlFor="sign_up_phone" className="tk-lp-label">
                    Phone
                </label>
                <input
                    className="tk-lp-input"
                    id="sign_up_phone"
                    type="text"
                    {...register('phone')}
                />
            </div>

            <div className="tk-lp-form-item">
                <label htmlFor="sign_up_gender" className="tk-lp-label">
                    Gender
                </label>
                <div className="form-list-elem">
                    <input
                        type="radio"
                        id="sl-show-yes"
                        className="cryptoki-radio"
                        value="1"
                        {...register('gender')}
                    />
                    <label htmlFor="sl-show-yes">Male</label>
                    <input
                        type="radio"
                        id="sl-show-no"
                        className="cryptoki-radio ml-lg-1"
                        value="0"
                        {...register('gender')}
                    />
                    <label htmlFor="sl-show-no">Female</label>
                </div>

            </div>


            <div className="tk-lp-form-item">
                <div className="tk-lp-check">
                    <label className="tk-lp-checkbox">
                        <input type="checkbox" name="gdpr" defaultValue={1} />
                        <span className="tk-lp-control-indicator" />
                    </label>
                    <div className="tk-lp-check-text">
                        I agree to{" "}
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
            >
                Register Now
            </button>
            <Link href='/login'
                className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item"
            >
                I have an account!
            </Link>
        </form>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common'])),
        },
        revalidate: 60, // In seconds
    };
};

export default RegisterUserForm