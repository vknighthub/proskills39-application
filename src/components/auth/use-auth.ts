import { atom, useAtom } from 'jotai';
import {
  AUTH_TOKEN_KEY,
  checkHasAuthToken,
  getAuthToken,
  removeAuthToken,
  setAuthToken,
} from '@/data/client/token.utils';
import SSRCookie from 'cookie';
import Cookie from 'js-cookie';

const authorizationAtom = atom(checkHasAuthToken());
export default function useAuth() {
  const [isAuthorized, setAuthorized] = useAtom(authorizationAtom);
  return {
    setToken: setAuthToken,
    getToken: getAuthToken,
    isAuthorized,
    authorize(token: string, permission: string[]) {
      setAuthToken(token,permission);
      setAuthorized(true);
    },
    unauthorize() {
      setAuthorized(false);
      removeAuthToken();
    },
  };
}

export function parseSSRCookie(context: any) {
  return SSRCookie.parse(context.req.headers.cookie ?? '');
}

export function getAuthCredentials(context?: any): {
  token: string | null;
  permission: string[] | null;
} {
  let authCred;
  if (context) {
    authCred = parseSSRCookie(context)[AUTH_TOKEN_KEY];
  } else {
    authCred = Cookie.get(AUTH_TOKEN_KEY);
  }
  if (authCred) {
    console.log(authCred)
    return JSON.parse(authCred);
  }
  return { token: null, permission: null };
}
