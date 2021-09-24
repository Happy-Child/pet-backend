declare module 'config' {
  import { Algorithm } from 'jsonwebtoken';

  export const APPS: {
    API: {
      PORT: number;
      PREFIX: string;
    };
  };

  export const POSTGRES: {
    readonly HOST: string;
    readonly USERNAME: string;
    readonly PASSWORD: string;
    readonly PORT: number;
    readonly DB: string;
    readonly RETRY_ATTEMPTS: number;
    readonly RETRY_DELAY: number;
  };

  export const MAIL_SENDER: {
    readonly FROM: string;
    readonly HOST: string;
    readonly PORT: number;
    readonly SECURE: boolean;
    readonly USER: string;
    readonly PASS: string;
  };

  export const FRONT_URLS: {
    CONFIRMED_REGISTRATION: string;
    CREATE_NEW_PASSWORD: string;
  };

  export const COOKIES_OPTIONS: {
    readonly SECURE: boolean;
    readonly SAME_SITE: boolean | 'lax' | 'strict' | 'none';
  };

  export const JWT: {
    readonly ALGORITHM: Algorithm;
    readonly EXPIRATION: string;
    readonly SECRET_KEY: string;
  };

  export const RSA: {
    readonly PRIVATE_KEY_PATH: string;
    readonly PUBLIC_KEY_PATH: string;
  };
}