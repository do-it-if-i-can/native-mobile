import {
  NODE_ENV,
  REACT_NATIVE_API_URL_DEVELOPMENT,
  REACT_NATIVE_API_URL_PRODUCTION,
  REACT_NATIVE_AUTH0_CLIENT_ID,
  REACT_NATIVE_AUTH0_DOMAIN,
  SECURE_STORE_ACCESS_TOKEN_DEVELOP,
  SECURE_STORE_ACCESS_TOKEN_PRODUCTION,
} from "@env";

export const API_URL = NODE_ENV === "development" ? REACT_NATIVE_API_URL_DEVELOPMENT : REACT_NATIVE_API_URL_PRODUCTION;

export const ACCESS_TOKEN =
  NODE_ENV === "development" ? SECURE_STORE_ACCESS_TOKEN_DEVELOP : SECURE_STORE_ACCESS_TOKEN_PRODUCTION;

export const AUTH0_CLIENT_ID = REACT_NATIVE_AUTH0_CLIENT_ID || "";
export const AUTH0_DOMAIN = REACT_NATIVE_AUTH0_DOMAIN || "";
