import useAuth from '@/components/auth/use-auth';
import type { UserProfileResult } from '@/types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
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
