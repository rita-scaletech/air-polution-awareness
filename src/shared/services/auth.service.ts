// import CryptoJS from 'crypto-js';
// import { ILoginResponse } from 'features/auth/interface/auth';

const KEY: string = process.env.REACT_APP_ENCRYPTION_KEY as string;

/**
 * function to check if user is logged in or not
 */
const isLogin = (): boolean => {
    if (localStorage.authData) {
        return true;
    } else {
        return false;
    }
};

/**
 * function to remove user authentication data
 */
const removeAuthData = (): void => {
    localStorage.removeItem('authData');
};

/**
 * function to get user language
 */
export const getUserLanguage = (): string => {
    return 'en';
};

const AuthService = {
    isLogin: isLogin,
    removeAuthData: removeAuthData,
};

export default AuthService;
