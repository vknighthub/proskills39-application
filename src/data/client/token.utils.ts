import { ConfigValue } from '@/config';
import Cookies from 'js-cookie';
import Cookie from 'js-cookie';

import {
  PERMISSION,
  TOKEN
} from '@/utils/constants';

export const AUTH_TOKEN_KEY = ConfigValue.AUTH_TOKEN_KEY;

export const allowedRoles = ["USER"];

export const getAuthToken = () => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get(AUTH_TOKEN_KEY);
};

export function setAuthToken(token: string, permission: string[]) {  
  Cookie.set(AUTH_TOKEN_KEY, JSON.stringify({ token, permission }));
}


export function removeAuthToken() {
  Cookies.remove(AUTH_TOKEN_KEY);
}
export function checkHasAuthToken() {
  const token = Cookies.get(AUTH_TOKEN_KEY);
  if (!token) return false;
  return true;
}

export function isAuthenticated(_cookies: any) {
  return (
    !!_cookies[TOKEN] &&
    Array.isArray(_cookies[PERMISSION]) &&
    !!_cookies[PERMISSION].length
  );
}


export function hasAccess(
  _allowedRoles: string[],
  _userPermissions: string[] | undefined | null
) {
  if (_userPermissions) {
    return Boolean(
      _allowedRoles?.find((aRole) => _userPermissions.includes(aRole))
    );
  }
  return false;
}

