import {
  NODE_ENV,
  REACT_NATIVE_API_URL_DEVELOPMENT,
  // REACT_NATIVE_API_URL_PRODUCTION,
  REACT_NATIVE_AUTH0_CLIENT_ID,
  REACT_NATIVE_AUTH0_DOMAIN,
  REACT_NATIVE_NONCE_SECRET,
  SECURE_STORE_ACCESS_TOKEN_DEVELOP,
  SECURE_STORE_ACCESS_TOKEN_PRODUCTION,
} from "@env";

export const API_URL = REACT_NATIVE_API_URL_DEVELOPMENT;

export const JWT_TOKEN =
  NODE_ENV === "development" ? SECURE_STORE_ACCESS_TOKEN_DEVELOP : SECURE_STORE_ACCESS_TOKEN_PRODUCTION;

export const AUTH0_CLIENT_ID = REACT_NATIVE_AUTH0_CLIENT_ID || "";
export const AUTH0_DOMAIN = REACT_NATIVE_AUTH0_DOMAIN || "";

export const NONCE_SECRET = REACT_NATIVE_NONCE_SECRET || "";
