import type { FC } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import { Button } from "~/components/ui/Button";
import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";

import type { ModalProps } from "./ModalProps";

export const ActionCheck: FC<ModalProps> = ({ isDelete = false, onCloseModal }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{isDelete ? "アカウントの削除" : "ログアウト"}</Text>
      <Text style={style.message}>
        {isDelete ? "アカウントを完全に削除してよろしいですか？" : "ログアウトしてよろしいですか？"}
      </Text>

      <View style={style.flex_row} bg="bg1">
        <Button
          label="キャンセル"
          bg="bg2"
          color="color1"
          outlineStyle={style.button_outline}
          viewStyle={style.button_bg}
          textStyle={style.button_text}
          onPress={onCloseModal}
        />
        <Button
          label="OK"
          bg="danger"
          color="white"
          outlineStyle={style.button_outline}
          viewStyle={style.button_bg}
          textStyle={style.button_text}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: "6%",
    paddingVertical: "6%",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: "4%",
  },
  message: {
    fontSize: 16,
    marginBottom: "10%",
  },

  flex_row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button_outline: {
    width: "48%",
  },
  button_bg: {
    paddingVertical: 0,
    height: 50,
  },
  button_text: {
    fontSize: 16,
    width: "auto",
    marginLeft: "4%",
  },
});
