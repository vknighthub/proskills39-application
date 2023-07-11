import useAuth from '@/components/auth/use-auth';
import type { UserProfileResult } from '@/types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Swal from 'sweetalert2';
import client from './client';
import { API_ENDPOINTS } from './client/endpoints';

export const useMe = () => {
  const { isAuthorized } = useAuth();
  const { data, isLoading, error } = useQuery<UserProfileResult, Error>(
    [API_ENDPOINTS.USERS_ME],
    client.users.me,
    {
      enabled: isAuthorized,
    }
  );

  return {
    me: data?.result,
    isLoading,
    error,
    isAuthorized,
  };
}

export function useLogout() {
  const { unauthorize } = useAuth();
  const queryClient = useQueryClient();
  return useMutation(client.users.logout, {
    onSuccess: () => {
      unauthorize();
      queryClient.resetQueries(API_ENDPOINTS.USERS_ME);
    },
  });
}


export const useAttendance = () => {
  return useMutation(client.users.attendancedaily, {
    onSuccess: () => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        color: 'green',
        title: 'Succeed!',
        text: `Congratulations on your attendance today. Please visit the page often for valuable gifts`,
      })
    },
  });
}

export const useWalletConnect = () => {
  return useMutation(client.users.connectwallet, {
    onSuccess: () => {

    },
  });
}
export const useFollow = () => {
  return useMutation(client.users.follow, {
    onSuccess: () => {

    },
  });
}