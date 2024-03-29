import client from "@/data/client";
import { AuthResponse, UpdateProfileInput, UserProfile } from "@/types";
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from "axios";
import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import * as yup from 'yup';

type PageProps = {
  profileinfo: UserProfile | undefined
}

const ProfileInfoForm = ({ profileinfo }: PageProps) => {
  const { t } = useTranslation('common');

  const updateProfileValidationSchema = yup.object().shape({
    address: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    fullname: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateProfileInput>({
    resolver: yupResolver(updateProfileValidationSchema)
  });

  const { mutate: updateprofile } = useMutation(client.users.updateprofile, {
    onSuccess: () => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        color: 'green',
        title: 'Succeed!',
        text: `${t('text-update-profile-success')}`
      })
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

  const onSubmit: SubmitHandler<UpdateProfileInput> = (data) => {
    updateprofile(data)
  };

  return (
    <div className="user-db-content-area">
      <form onSubmit={handleSubmit(onSubmit)}
        className="cryptoki-form" id="personal-info-form">
        <div className="user-db-title">{t('text-profile-page-title')}</div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="name">{t('text-full-name')}</label>
            <input type="text" id="name" defaultValue={profileinfo?.fullname} {...register('fullname')} />
          </div>
          <div className="form-field">
            <label htmlFor="email">{t('text-email')}</label>
            <input type="email" id="email" defaultValue={profileinfo?.email} {...register('email')} />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="username">{t('text-address')}</label>
            <input type="text" id="username" defaultValue={profileinfo?.address} {...register('address')} />
          </div>
          <div className="form-field">
            <label htmlFor="phone">{t('text-phone')}</label>
            <input type="tel" id="phone" pattern="[0-9]{10}" defaultValue={profileinfo?.phone} {...register('phone')} />
          </div>
        </div>
        <button type="submit" className="btn btn-wide btn-dark">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
