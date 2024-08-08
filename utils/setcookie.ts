
import { cookies } from 'next/headers';
import { parse } from 'cookie';
export function setCookie(name:string, value:string, options = {}) {
  const cookieStore = cookies();
  cookieStore.set(name, value, {
    path: '/',
    sameSite: 'lax',
    ...options,
  });
}
export function getCookie(req:any, name: string | number) {
  const cookies = parse(req.headers.cookie || '');
  return cookies[name] || null;
}
