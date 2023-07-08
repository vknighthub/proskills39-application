import useAuth from '@/components/auth/use-auth';
import client from '@/data/client';
import type { AuthResponse, LoginUserInput } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import * as yup from 'yup';


const loginValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function LoginUserForm() {
  const { t } = useTranslation('common');
  const { authorize } = useAuth();
  const router = useRouter()

  const callbackUrl = (router.query?.callbackUrl as string) ?? "/";

  const { mutate: login, isSuccess } = useMutation(client.users.login, {
    onSuccess: (data) => {
      if (!data.result.data.token) {
        toast.error(<b>{t('text-wrong-user-name-and-pass')}</b>, {
          className: '-mt-10 xs:mt-0',
        });
        return;
      } else {
        authorize(data.result.data.token, data.result.data.permission);
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

  if (isSuccess) {
    router.push(callbackUrl)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginUserInput>({
    resolver: yupResolver(loginValidationSchema)
  });

  const onSubmit: SubmitHandler<LoginUserInput> = (data) => {
    login(data)
  };



  return (


    <form onSubmit={handleSubmit(onSubmit)}
      id="sign-in"
      className="tk-lp-form user-register-kit-sign tk-lp-tabs-form-content active"
      data-handler="lrk_sign_in_action"
    >
      <div className="tk-lp-form-item">
        <label htmlFor="sign_in_username" className="tk-lp-label">
          {t("text-username-or-email-address")}
        </label>
        <input
          className="tk-lp-input"
          id="sign_in_username"
          type="text"
          {...register('username')}
        />
      </div>
      <div className="tk-lp-form-item">
        <label htmlFor="sign_in_password" className="tk-lp-label">
          {t("text-password")}
        </label>
        <input
          className="tk-lp-input"
          id="sign_in_password"
          type="password"
          autoComplete="password"
          {...register('password')}
        />
      </div>

      <div className="centered-button">
        <button
          type="submit"
          className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
        >
          {t("text-login")}
        </button>
        <Link href='/register'
          className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item"
        >
          {t("text-create-account")}
        </Link>
      </div>

    </form>
  );
}
