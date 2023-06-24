import client from '@/data/client';
import type { AuthResponse, ForgotPasswordInput } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import * as yup from 'yup';


const forgotPasswordValidationSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
});

export default function ForgotPasswordForm() {
  const { t } = useTranslation('common');
  const router = useRouter()

  const { mutate: forgotpassword } = useMutation(client.users.forgotpassword, {
    onSuccess: (data,variables) => {
      const { username, email } = variables;
      if (data.errorcode !== 0) {
        Swal.fire({
          position: 'top',
          icon: 'error',
          color: 'red',
          title: 'Oops...',
          text: `${data.messagedetail}`,
        })
        return;
      } else {
        Swal.fire({
          position: 'top',
          icon: 'success',
          color: 'green',
          title: 'Succeed!',
          text: `We have sent to your mail a OTP code to vefiy reset password. Please get OTP code and input into page`,
        }).then(response => {
          if (response.value) {
            router.push(`/confirmotp/${username}/${email}`)
          }
        })
      }

    },
    onError: (errorAsUnknown) => {
      const error = errorAsUnknown as AxiosError<AuthResponse>;
      Swal.fire({
        position: 'top',
        icon: 'error',
        color: 'red',
        title: 'Oops...',
        text: `${error?.response?.status === 400 ? error?.response?.data.messagedetail : 'Error'}`,
      })

    }
  });


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordInput>({
    resolver: yupResolver(forgotPasswordValidationSchema)
  });

  const onSubmit: SubmitHandler<ForgotPasswordInput> = (data) => {
    forgotpassword(data)
  };


  return (


    <form onSubmit={handleSubmit(onSubmit)}
      id="sign-in"
      className="tk-lp-form user-register-kit-sign tk-lp-tabs-form-content active"
      data-handler="lrk_sign_in_action"
    >
      <div className="tk-lp-form-item">
        <label htmlFor="sign_in_username" className="tk-lp-label">
          {t("text-usernames")}
        </label>
        <input
          className="tk-lp-input"
          id="sign_in_username"
          type="text"
          {...register('username')}
        />
      </div>
      <div className="tk-lp-form-item">
        <label htmlFor="sign_in_email" className="tk-lp-label">
          {t("text-email")}
        </label>
        <input
          className="tk-lp-input"
          id="sign_in_email"
          type="email"
          autoComplete="email"
          {...register('email')}
        />
      </div>
      <div className="centered-button">
      <button
        type="submit"
        className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
      >
        {t("text-forgot-password")}
      </button>
      <Link href='/login'
        className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item"
      >
        {t("text-login")}
      </Link>
      </div>
    </form>
  );
}
