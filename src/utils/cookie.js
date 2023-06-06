import Cookies from 'universal-cookie';

const cookie = new Cookies()

export const setCookie = (key,value) => cookie.set(key,value,{path:"/",})
export const getCookie = (key) => cookie.get(key)