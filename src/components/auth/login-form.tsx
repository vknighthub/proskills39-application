import useAuth from '@/components/auth/use-auth';
import client from '@/data/client';
import type { AuthResponse, LoginUserInput } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { useRouter } from 'next/router'
import Link from 'next/link';


const loginValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function LoginUserForm() {
  const { t } = useTranslation('common');
  const { authorize } = useAuth();
  const router = useRouter()

  const { mutate: login, isSuccess } = useMutation(client.users.login, {
    onSuccess: (data) => {
      if (!data.result.data.token) {
        toast.error(<b>{t('text-wrong-user-name-and-pass')}</b>, {
          className: '-mt-10 xs:mt-0',
        });
        return;
      } else {
        authorize(data.result.data.token);
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
      position: 'top',
      icon: 'success',
      color: 'green',
      text: `Success`,
    }).then(response => {
      if (response.value) {
        router.push('/')
      }
    })
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

      <input
        className="lrk-sign-captcha-token simple-input"
        type="hidden"
        name="token"
        defaultValue="03AGdBq27AAQVuBtGUv1Ur7tTrD27P2-RiW4gjxYtbRujJeny-2A8m-_R-CRMi3Mh_0KYlw9tXtY0c0YQA26Uy-Y0FN4vwKVVXcp7AyC-D_H-z2OwkzcQCoZ0MrBjnP8q0RWRCdtHYHlBpkmUB7k-0bocxpvVJFbBoeHtebebXD2AkkuQsz0HqXXgHtXpxevzuUmtsroAgjnzFuk97-VFXsCiUuIlA08gyNGPMi9prm96oq5z2sVXXKHzWvt68DyVAvvOSm5gb8jkpSDo8QNODZX69enqLu1ngRaaIDaSSwAKzn98ZLxr8nBEia-rYZHnMuT-1FJKF3ZEgsYal801f0A-76vot9aNIsLD48M5-LQugrADeLwI0aZboeFy5TJ6lVjmNhrxrIoqZ_I0t-juUrR0nrY_6C-PP7EFeuOJ0YewHOnfvHADGpA4"
      />
      <input
        type="hidden"
        name="redirect_to"
        defaultValue="https://crumina.net/my-account/"
      />
      <div className="tk-lp-alert-cont" />
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
    </form>
  );
}
