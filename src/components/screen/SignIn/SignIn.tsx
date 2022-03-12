import type { AuthError, AuthSessionResult, TokenResponse } from "expo-auth-session";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import jwtDecode from "jwt-decode";
import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, Platform, StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Apple, Google, QinTodo } from "~/components/ui/Icon";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "~/constants/ENV";

import type { SignInScreenProps } from "./ScreenProps";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ useProxy });
// console.info(`Redirect URL: ${redirectUri}`);

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
  picture: string;
  sub: string;
  updated_at: string;
};

const isAuthRequestExecuted = (result: AuthSessionResult): result is AuthSessionExecutedResult => {
  return result.type in ["success", "error"];
};

export const SignIn: FC<SignInScreenProps> = () => {
  const [name, setName] = useState<Auth0User | null>(null);

  const [_request, result, promptAsync] = useAuthRequest(
    {
      redirectUri,
      clientId: AUTH0_CLIENT_ID,
      responseType: "id_token",
      scopes: ["openid", "profile"],
      extraParams: {
        nonce: "nonce",
      },
    },
    { authorizationEndpoint: AUTH0_DOMAIN },
  );

  const onSignIn = useCallback(() => {
    promptAsync({ useProxy });
  }, [promptAsync]);

  const onNameNull = useCallback(() => {
    setName(null);
  }, []);

  useEffect(() => {
    if (result && isAuthRequestExecuted(result)) {
      if (result?.error) {
        Alert.alert("Authentication error", result?.params.error_description || "something went wrong");
        return;
      }

      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode<Auth0User>(jwtToken);
        setName(decoded);
      }
    }
  }, [result]);

  return (
    <View style={style.container}>
      <View style={style.icon_area}>
        <QinTodo />
      </View>

      <Text>{name}</Text>

      <Button
        leftIcon={<Google />}
        label="Googleでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        bg="bg1"
        onPress={onSignIn}
      />

      <Button
        leftIcon={<Apple />}
        label="Appleでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        lightBg="#333333"
        lightColor="#FFF"
        onPress={onNameNull}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: "6%",
  },
  icon_area: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15%",
  },
  button_outline: {
    marginBottom: "4%",
  },
  button_bg: {
    height: 60,
  },
  button_text: {
    width: "auto",
    marginLeft: "4%",
  },
});
