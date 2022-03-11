/* eslint-disable react/jsx-handler-names */
import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { Alert, Platform, StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Apple, Google, QinTodo } from "~/components/ui/Icon";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "~/constants/ENV";

import type { SignInScreenProps } from "./ScreenProps";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
console.info(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
console.info(`Redirect URL: ${redirectUri}`);

export const SignIn: FC<SignInScreenProps> = () => {
  const [name, setName] = useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
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
  ) as any;

  useEffect(() => {
    if (result) {
      if (result?.error) {
        Alert.alert("Authentication error", result?.params.error_description || "something went wrong");
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded as any;
        setName(name);
      }
    }
  }, [result]);

  console.info(name, request);

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
        onPress={() => promptAsync({ useProxy })}
      />

      <Button
        label="Log out"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        onPress={() => setName(null)}
      />

      <Button
        leftIcon={<Apple />}
        label="Appleでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        lightBg="#333333"
        lightColor="#FFF"
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
