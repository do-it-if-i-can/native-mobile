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
      <View style={style.icon_area}>
        <QinTodo />
      </View>

      <Button
        leftIcon={<Google />}
        label="Googleでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        lightBg="#FFF"
        lightColor="#0c0c0c"
        darkBg="#FFF"
        darkColor="#0c0c0c"
      />

      <Button
        leftIcon={<Apple />}
        label="Appleでサインイン"
        outlineStyle={style.button_outline}
        viewStyle={style.button_bg}
        textStyle={style.button_text}
        lightBg="#000000"
        lightColor="#FFF"
        darkBg="#000000"
        darkColor="#FFF"
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
