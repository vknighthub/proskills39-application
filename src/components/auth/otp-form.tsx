import client from '@/data/client';
import type { AuthResponse, ForgotPasswordInput } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import * as yup from 'yup';


const forgotPasswordOTPValidationSchema = yup.object().shape({
  code: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().required(),
});

export default function OTPPasswordForm({ username, email }: ForgotPasswordInput) {
  const { t } = useTranslation('common');
  const router = useRouter()

  const { mutate: forgotpasswordOTP } = useMutation(client.users.forgotpassword, {
    onSuccess: (data) => {
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
          text: `Your password has been reset. Please login to email to get new password`,
        }).then(response => {
          if (response.value) {
            router.push('/login')
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
    resolver: yupResolver(forgotPasswordOTPValidationSchema)
  });

  const onSubmit: SubmitHandler<ForgotPasswordInput> = (data) => {

    forgotpasswordOTP(data)
  };

  console.log(errors)

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
          defaultValue={username}
          readOnly
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
          defaultValue={email}
          autoComplete="email"
          readOnly
          {...register('email')}
        />
      </div>

      <div className="tk-lp-form-item">
        <label htmlFor="sign_in_code" className="tk-lp-label">
          {t("OTP Code")}
        </label>
        <input
          className="tk-lp-input"
          id="sign_in_code"
          type="text"
          {...register('code')}
        />
      </div>

      <button
        type="submit"
        className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
      >
        {t("text-submit")}
      </button>
    </form>
  );
}
