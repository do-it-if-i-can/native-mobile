import type { FC } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Apple, Google, QinTodo } from "~/components/ui/Icon";
import { View } from "~/components/ui/View";

import type { SignInScreenProps } from "./ScreenProps";

export const SignIn: FC<SignInScreenProps> = () => {
  return (
    <View style={style.container}>
      <View style={style.iconArea}>
        <QinTodo />
      </View>

      <Button
        leftIcon={<Google />}
        label="Googleでサインイン"
        outlineStyle={style.buttonOutline}
        viewStyle={style.buttonBg}
        textStyle={style.buttonText}
        bg="bg1"
      />

      <Button
        leftIcon={<Apple />}
        label="Appleでサインイン"
        outlineStyle={style.buttonOutline}
        viewStyle={style.buttonBg}
        textStyle={style.buttonText}
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
  iconArea: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15%",
  },
  buttonOutline: {
    marginBottom: "4%",
  },
  buttonBg: {
    height: 60,
  },
  buttonText: {
    width: "auto",
    marginLeft: "4%",
  },
});
