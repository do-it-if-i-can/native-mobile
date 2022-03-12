import type { AuthError, AuthSessionResult, TokenResponse } from "expo-auth-session";
import { makeRedirectUri, startAsync } from "expo-auth-session";
import jwtDecode from "jwt-decode";
import queryString from "query-string";
import { useCallback } from "react";
import { Alert, Platform } from "react-native";
import { useRecoilState } from "recoil";

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, JWT_TOKEN, NONCE_SECRET } from "~/constants/ENV";
import { user } from "~/stores/user";
import { generateNonce } from "~/utils/generateNonce";
import { deleteSecureStore, getSecureStore, saveSecureStore } from "~/utils/secureStore";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ useProxy });

type AuthSessionExecutedResult = {
  type: "error" | "success";
  errorCode: string | null;
  error?: AuthError | null;
  params: {
    [key: string]: string;
  };
  authentication: TokenResponse | null;
  url: string;
};

type Auth0User = {
  aud: string;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  locale: string;
  name: string;
  nickname: string;
  nonce: string;
  picture: string;
  sub: string;
  updated_at: string;
};

const isAuthRequestExecuted = (result: AuthSessionResult): result is AuthSessionExecutedResult => {
  return ["success", "error"].includes(result.type);
};

export const useSignInAuth0 = () => {
  const [authSession, setAuthSession] = useRecoilState(user);

  const onSignIn = useCallback(async () => {
    const generatedNonce = await generateNonce();
    startAsync({
      authUrl:
        `${AUTH0_DOMAIN}?` +
        queryString.stringify({
          client_id: AUTH0_CLIENT_ID,
          response_type: "id_token",
          scope: "openid profile email",
          redirect_uri: redirectUri,
          nonce: generatedNonce,
        }),
    }).then(async (result) => {
      if (isAuthRequestExecuted(result)) {
        if (result?.error) {
          Alert.alert("Authentication error", result?.params.error_description || "something went wrong");
          return;
        }

        if (result.type === "success") {
          const jwtToken = result.params.id_token;
          const decodedToken = jwtDecode<Auth0User>(jwtToken);
          const { nonce, sub, name, picture } = decodedToken;

          const storeNonce = await getSecureStore(NONCE_SECRET);
          if (nonce === storeNonce) {
            saveSecureStore(
              JWT_TOKEN,
              JSON.stringify({
                id: sub,
                name,
                avatar: picture,
              }),
            );

            setAuthSession((prev) => {
              return prev ? { ...prev, isSignIn: true } : { isSignIn: false, user: null };
            });
          } else {
            Alert.alert("Error", "Nonces don't match");
            console.info("log 4");
          }
        }
      }
    });
  }, []);

  const onSignOut = useCallback(async () => {
    await deleteSecureStore(JWT_TOKEN);
    setAuthSession(null);
  }, []);

  const onFetchToken = useCallback(async () => {
    const result = await getSecureStore(JWT_TOKEN);
    console.info("token", result);
  }, []);

  return { authSession, onSignIn, onSignOut, onFetchToken };
};
